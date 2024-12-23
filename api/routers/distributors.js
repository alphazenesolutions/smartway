const router = require("express").Router()

const Hash = require("../helpers/bcrypt")
const { checkUser, checkUserid } = require("../modules/distributors")
const db = require("../database/mysql")
var randomstring = require("randomstring");

router.get("/", async (req, res) => {
    const myquery = 'SELECT * FROM distributors'
    const distributors = new Promise(async (resolve, reject) => {
        await db.query(myquery, (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })

    })
    var alldistributors = await distributors
    return res.send(alldistributors)
})

router.post("/create", async (req, res) => {
    const { email } = req.body
    const checkuser = await checkUser(email)
    if (checkuser.length !== 0) return res.status(400).send("Already Registerd")
    var user = req.body
    var referral = await randomstring.generate(7);
    user["userid"] = Date.now().toString()
    user["referralcode"]=referral
    const myquery = 'INSERT INTO distributors SET ?'
    const create = new Promise(async (resolve, reject) => {
        await db.query(myquery, user, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var newdistributors = await create
    if (newdistributors == true) return res.send(user)
    return res.send(newdistributors)
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const checkuser = await checkUser(email)
    if (checkuser.length == 0) return res.status(401).send("You Are Not Register")
    const mypws = checkuser[0].password
    if (password === mypws) return res.send(checkuser)
    return res.status(401).send("In-valid email/password")
})

router.get("/:userid", async (req, res) => {
    const { userid } = req.params
    const myquery = "SELECT * FROM distributors WHERE userid=?"
    const singledistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [userid], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const singledistributors = await singledistributor
    return res.send(singledistributors)
})
router.patch("/:email", async (req, res) => {
    const { email } = req.params
    const myquery = "SELECT * FROM distributors WHERE email=?"
    const singledistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [email], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const singledistributors = await singledistributor
    return res.send(singledistributors)
})

router.post("/changepassword", async (req, res) => {
    const { email, oldpassword, newpassword, userid } = req.body
    const checkuserid = await checkUserid(userid)
    if (checkuserid.length == 0) return res.status(400).send("in-valid User")
    const useremail = checkuserid[0].email
    const userpassword = checkuserid[0].password
    if (email !== useremail) return res.status(400).send("in-valid User")
    if (oldpassword != userpassword) return res.status(400).send("in-valid Password")   
    const newpwd = {
        password: newpassword
    }
    const myquery = "UPDATE distributors SET ? WHERE userid = ?"
    const updatepassword = new Promise(async (resolve, reject) => {
        await db.query(myquery, [newpwd, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const newpwds = await updatepassword
    return res.send(newpwds)
})

router.put("/:userid", async (req, res) => {
    const { userid } = req.params
    const myquery = "UPDATE distributors SET ? WHERE userid = ?"
    const updatedistributors = new Promise(async (resolve, reject) => {
        await db.query(myquery, [req.body, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const update = await updatedistributors
    return res.send(update)
})

router.get("/balance/:userid", async (req, res) => {
    const { userid } = req.params
    const myquery = "SELECT * FROM distributor_earnings WHERE userid=?"
    const singledistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [userid], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const singledistributors = await singledistributor
    return res.send(singledistributors)
})

router.put("/update/:userid", async (req, res) => {
    const { userid } = req.params
    const myquery = "UPDATE distributor_earnings SET ? WHERE userid = ?"
    const updatedistributors = new Promise(async (resolve, reject) => {
        await db.query(myquery, [req.body, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const update = await updatedistributors
    return res.send(update)
})

router.get("/ref/:referralcode", async (req, res) => {
    const { referralcode } = req.params
    const myquery = "SELECT * FROM distributors WHERE referralcode=?"
    const singledistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [referralcode], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const singledistributors = await singledistributor
    return res.send(singledistributors)
})

router.get("/branch/:referralcode", async (req, res) => {
    const { referralcode } = req.params
    const myquery = "SELECT * FROM users WHERE referral=?"
    const singledistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [referralcode], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const singledistributors = await singledistributor
    return res.send(singledistributors)
})


router.post("/amount", async (req, res) => {
    const myquery = 'INSERT INTO distributor_earnings SET ?'
    const create = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var newdistributors = await create
    if (newdistributors == true) return res.send(req.body)
    return res.send(newdistributors)
})
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const myquery = "DELETE FROM distributors WHERE id= ?"
    const deldistributor = new Promise(async (resolve, reject) => {
        await db.query(myquery, [id], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const deldistributorss = await deldistributor
    return res.send(deldistributorss)
})

module.exports = router
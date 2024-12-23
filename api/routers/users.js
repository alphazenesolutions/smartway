const router = require("express").Router()

const Hash = require("../helpers/bcrypt")
const { checkUser, checkUserid } = require("../modules/users")
const db = require("../database/mysql")

const firebase = require("../database/firebase")
var firestore = firebase.firestore()
router.get("/", async (req, res) => {
    const myquery = 'SELECT * FROM users'
    const users = new Promise(async (resolve, reject) => {
        await db.query(myquery, (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })

    })
    var allusers = await users
    return res.send(allusers)
})

router.get("/firebase", async (req, res) => {
    try {
        const users = new Promise(async (resolve, reject) => {
            firestore.collection("users").get().then(async (snap) => {
                var datas = []
                snap.forEach(async (doc1) => {
                    if (doc1.data() != undefined) {
                        var firebaseusers = {
                            "password": doc1.data().upassword,
                            "name": doc1.data().uname,
                            "email": doc1.data().uemail,
                            "location": doc1.data().ulocation,
                            "phone": doc1.data().uphone,
                            "userid": doc1.data().userid,
                            "wallet": 0
                        }
                        datas.push(firebaseusers)
                    }
                })
                return resolve(datas)
            })
        })
        var allusers = await users
        return res.send(allusers)
    } catch (error) {
        console.log(error.message);
    }
})

router.post("/newcreate", async (req, res) => {
    var firebaseusers = req.body
    const { email } = req.body
    const checkuser = await checkUser(email)
    if (checkuser.length !== 0) return res.status(400).send("Already Registerd")
    var user = req.body
    // var hashPwd = await Hash.createrHashpwd(password)
    // user["password"] = hashPwd
    user["userid"] = Date.now().toString()
    const myquery = 'INSERT INTO users SET ?'
    const create = new Promise(async (resolve, reject) => {
        await db.query(myquery, user, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var allusers = await create
    console.log(allusers);
    if (allusers == true) return res.send(user)
    return res.send(allusers)
})


router.post("/create", async (req, res) => {
    const { email } = req.body
    const checkuser = await checkUser(email)
    if (checkuser.length !== 0) return res.status(400).send("Already Registerd")
    var user = req.body
    user["userid"] = Date.now().toString()
    const myquery = 'INSERT INTO users SET ?'
    const create = new Promise(async (resolve, reject) => {
        await db.query(myquery, user, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var allusers = await create
    if (allusers == true) return res.send(user)
    return res.send(allusers)
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
    const myquery = "SELECT * FROM users WHERE userid=?"
    const singleUser = new Promise(async (resolve, reject) => {
        await db.query(myquery, [userid], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const user = await singleUser
    return res.send(user)
})
router.patch("/:email", async (req, res) => {
    const { email } = req.params
    const myquery = "SELECT * FROM users WHERE email=?"
    const singleUser = new Promise(async (resolve, reject) => {
        await db.query(myquery, [email], (err, res) => {
            if (err) return resolve(err)
            return resolve(res)
        })
    })
    const user = await singleUser
    return res.send(user)
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
    const myquery = "UPDATE users SET ? WHERE userid = ?"
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
    const myquery = "UPDATE users SET ? WHERE userid = ?"
    const updateUser = new Promise(async (resolve, reject) => {
        await db.query(myquery, [req.body, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const update = await updateUser
    return res.send(update)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const myquery = "DELETE FROM users WHERE id= ?"
    const updateUser = new Promise(async (resolve, reject) => {
        await db.query(myquery, [id], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const update = await updateUser
    return res.send(update)
})

module.exports = router
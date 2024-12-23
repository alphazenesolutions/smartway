exports.passport = (req, res) => {
    res.render("passport")
}
exports.passportnew = (req, res) => {
    res.render("passportnew")
}
exports.postpassportnew = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const passportnew = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var passportnews = await passportnew
    return res.send(passportnews)
}
exports.passportrenewal = (req, res) => {
    res.render("passportrenewal")
}

exports.postpassportrenewal = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const passportrenewal = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var passportrenewals = await passportrenewal
    return res.send(passportrenewals)
}
exports.tatkaal = (req, res) => {
    res.render("tatkal")
}

exports.posttatkaal = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const tatkaal = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var tatkaals = await tatkaal
    return res.send(tatkaals)
}
exports.policeclearance = (req, res) => {
    res.render("policeclearance")
}
exports.postpoliceclearance = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const policeclearance = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var policeclearances = await policeclearance
    return res.send(policeclearances)
}
exports.childrenewal = (req, res) => {
    res.render("childrenewal")
}
exports.postchildrenewal = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const childrenewal = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var childrenewals = await childrenewal
    return res.send(childrenewals)
}
exports.childadult = (req, res) => {
    res.render("adultrenewal")
}
exports.postchildadult = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const childadult = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var childadults = await childadult
    return res.send(childadults)
}

exports.Flightticket = (req, res) => {
    res.render("flightticket")
}
exports.postFlightticket = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const postFlightticket = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postFlighttickets = await postFlightticket
    return res.send(postFlighttickets)
}

exports.Thirupathiticket = (req, res) => {
    res.render("thirupathi")
}
exports.postThirupathiticket = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const Thirupathiticket = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var Thirupathitickets = await Thirupathiticket
    return res.send(Thirupathitickets)
}

exports.traintickets = (req, res) => {
    res.render("trainticket")

}
exports.posttraintickets = async (req, res) => {
    const myquery = 'INSERT INTO other_certificates SET ?'
    const traintickets = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var trainticketss = await traintickets
    return res.send(trainticketss)
}
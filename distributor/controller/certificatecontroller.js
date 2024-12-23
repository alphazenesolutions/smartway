var express = require('express');
var app = express();


const moment=require("moment")


exports.allcertificate = (req, res) => {
    res.render("certificates")
}
exports.gstmonthly = (req, res) => {
    res.render("gstmonthly")
}
exports.postgstmonthly = async (req, res) => {
    const myquery = 'INSERT INTO all_certificates SET ?'
    const postgstmonthly = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postgstmonthlys = await postgstmonthly
    return res.send(postgstmonthlys)
}
exports.incometax = (req, res) => {
    res.render("incometax")
}
exports.postincometax = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postincometax = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postincometaxs = await postincometax
    return res.send(postincometaxs)
}
exports.FSSAI = (req, res) => {
    res.render("FSSAI")
}
exports.postFSSAI = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postFSSAI = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postFSSAIs = await postFSSAI
    return res.send(postFSSAIs)
}
exports.Fire = (req, res) => {
    res.render("Fire")
}
exports.postFire = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postFire = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postFires = await postFire
    return res.send(postFires)
}
exports.Pvt = (req, res) => {
    res.render("Pvt")
}
exports.postPvt = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postPvt = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postPvts = await postPvt
    return res.send(postPvts)
}
exports.Drug = (req, res) => {
    res.render("Drug")
}
exports.postDrug = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postDrug = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postDrugs = await postDrug
    return res.send(postDrugs)
}
exports.Residential = (req, res) => {
    res.render("Residential")
}
exports.postResidential = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postResidential = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postResidentials = await postResidential
    return res.send(postResidentials)
}



exports.OAB = (req, res) => {
    res.render("OAB")
}
exports.postOAB = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postOAB = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postOABs = await postOAB
    return res.send(postOABs)
}

exports.migration = (req, res) => {
    res.render("migration-certificate")
}
exports.postmigration = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postmigration = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postmigrations = await postmigration
    return res.send(postmigrations)
}
exports.farmer = (req, res) => {
    res.render("farmer-certificate")
}
exports.postfarmer = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postfarmer = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postfarmers = await postfarmer
    return res.send(postfarmers)
}
exports.widow = (req, res) => {
    res.render("widow-pension")
}
exports.postwidow = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postwidow = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postwidows = await postwidow
    return res.send(postwidows)
}

exports.IRCTC = (req, res) => {
    res.render("IRCTC")
}
exports.postIRCTC = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postIRCTC = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postIRCTCs = await postIRCTC
    return res.send(postIRCTCs)
}

exports.pattatransfer = (req, res) => {
    res.render("pattatransfer")
}
exports.postpattatransfer =async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postpattatransfer = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postpattatransfers = await postpattatransfer
    return res.send(postpattatransfers)
}
exports.Itfiling = (req, res) => {
    res.render("Itfiling")
}
exports.postItfiling = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postItfiling = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postItfilings = await postItfiling
    return res.send(postItfilings)
}
exports.Smartcard = (req, res) => {
    res.render("Smartcard")
}
exports.postSmartcard = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postSmartcard = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postSmartcards = await postSmartcard
    return res.send(postSmartcards)
}
exports.Legalheircertificate = (req, res) => {
    res.render("legalheir")
}
exports.postLegalheircertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postLegalheircertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postLegalheircertificates = await postLegalheircertificate
    return res.send(postLegalheircertificates)
}
exports.Obccertificate = (req, res) => {
    res.render("obccertificate")
}
exports.postObccertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postObccertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postObccertificates = await postObccertificate
    return res.send(postObccertificates)
}
exports.Nomalecertificate = (req, res) => {
    res.render("nomalecertificate")
}
exports.postNomalecertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postNomalecertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postNomalecertificates = await postNomalecertificate
    return res.send(postNomalecertificates)
}
exports.Nativecertificate = (req, res) => {
    res.render("Nativecertificate")
}
exports.postNativecertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postNativecertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postNativecertificates = await postNativecertificate
    return res.send(postNativecertificates)
}

exports.MSMEcertificate = (req, res) => {
    res.render("MSME")
}
exports.postMSMEcertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postMSMEcertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postMSMEcertificates = await postMSMEcertificate
    return res.send(postMSMEcertificates)
}

exports.Pancertificate = (req, res) => {
    res.render("pan")
}
exports.postPancertificate = async (req, res) => {
     const myquery = 'INSERT INTO pan_certificates SET ?'
    const postPancertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postPancertificates = await postPancertificate
    return res.send(postPancertificates)
}
exports.Firstgraduatecertificate = (req, res) => {
    res.render("Firstgraduatecertificate")
}
exports.postFirstgraduatecertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postFirstgraduatecertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postFirstgraduatecertificates = await postFirstgraduatecertificate
    return res.send(postFirstgraduatecertificates)
}
exports.Communitycertificte = (req, res) => {
    res.render("Communitycertificate")
}
exports.postCommunitycertificte = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postCommunitycertificte = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postCommunitycertifictes = await postCommunitycertificte
    return res.send(postCommunitycertifictes)
}
exports.Incomecertificate = (req, res) => {
    res.render("Incomecertificate")
}
exports.postIncomecertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postIncomecertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postIncomecertificates = await postIncomecertificate
    return res.send(postIncomecertificates)
}
exports.Unemploymentcerificate = (req, res) => {
    res.render("Unemploymentcerificate")
}
exports.postUnemploymentcerificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postUnemploymentcerificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postUnemploymentcerificates = await postUnemploymentcerificate
    return res.send(postUnemploymentcerificates)
}
exports.Unmarriedcertificate = (req, res) => {
    res.render("Unmarriedcertificate")
}
exports.postUnmarriedcertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postUnmarriedcertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postUnmarriedcertificates = await postUnmarriedcertificate
    return res.send(postUnmarriedcertificates)
}
exports.voteridcertificate = (req, res) => {
    res.render("voterid")
}
exports.postvoteridcertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postvoteridcertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postvoteridcertificates = await postvoteridcertificate
    return res.send(postvoteridcertificates)
}
exports.Widowcertificate = (req, res) => {
    res.render("widowcertificate")
}
exports.postWidowcertificate = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postWidowcertificate = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postWidowcertificates = await postWidowcertificate
    return res.send(postWidowcertificates)
}

exports.Gst = (req, res) => {
    res.render("Gst")
}
exports.postGst = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postGst = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postGsts = await postGst
    return res.send(postGsts)
}
exports.InterCaste = (req, res) => {
    res.render("Intercastecertificate")
}
exports.postInterCaste = async (req, res) => {
     const myquery = 'INSERT INTO all_certificates SET ?'
    const postInterCaste = new Promise(async (resolve, reject) => {
        await db.query(myquery, req.body, (err, res) => {
            if (err) return resolve(err)
            return resolve(true)
        })
    })
    var postInterCastes = await postInterCaste
    return res.send(postInterCastes)
}
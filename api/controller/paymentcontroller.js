const express = require('express');
const app = express();

const Razorpay = require('razorpay')
const { checkUserid } = require("../modules/users")
const admin=require("../modules/admin")
const destributor =require("../modules/distributors")
const db = require("../database/mysql")

let instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY, // your `KEY_ID`(rzp_live_3mWK5obhokVYg0)
    key_secret: process.env.RAZORPAY_SECRET_ACCESS_KEY // your `KEY_SECRET`(93YdSAQLyeeSv8QmGEqmE2lV)
})
exports.payment = (req, res) => {
    res.render("payments")

}
exports.getaddpayment = (req, res) => {
    res.render("addpayments")
}
exports.paymentsadd = (req, res) => {
    instance.orders.create(req.body).then((data) => {
        res.send({ "sub": data, "status": "success" });
    }).catch((error) => {
        res.send({ "sub": error, "status": "failed" });
    })
}
exports.paymentssend = async (req, res) => {
    const { userid, wallet } = req.body
    var userinfo = await checkUserid(userid)    
    var updatedata = req.body
    if (userinfo.length == 0) return res.send(false)
    var finalamount = Number(userinfo[0].wallet) + Number(wallet)
    updatedata["wallet"] = finalamount    
    const myquery = "UPDATE users SET ? WHERE userid = ?"
    const updatewallet = new Promise(async (resolve, reject) => {
        await db.query(myquery, [updatedata, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const wallets = await updatewallet
    return res.send(wallets)

}

exports.adminpaymentssend = async (req, res) => {
    const { userid, wallet } = req.body
    var userinfo = await admin.checkUserid(userid)       
    var updatedata = req.body
    if (userinfo.length == 0) return res.send(false)
    var finalamount = Number(userinfo[0].wallet) + Number(wallet)
    updatedata["wallet"] = finalamount    
    const myquery = "UPDATE admins SET ? WHERE userid = ?"
    const updatewallet = new Promise(async (resolve, reject) => {
        await db.query(myquery, [updatedata, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const wallets = await updatewallet
    return res.send(wallets)

}

exports.distributorpaymentssend = async (req, res) => {
    const { userid, wallet } = req.body
    var userinfo = await destributor.checkUserid(userid)       
    var updatedata = req.body
    if (userinfo.length == 0) return res.send(false)
    var finalamount = Number(userinfo[0].wallet) + Number(wallet)
    updatedata["wallet"] = finalamount    
    const myquery = "UPDATE distributors SET ? WHERE userid = ?"
    const updatewallet = new Promise(async (resolve, reject) => {
        await db.query(myquery, [updatedata, userid], (err, res) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })
    const wallets = await updatewallet
    return res.send(wallets)

}
var express = require('express');
var app = express();
var firebase = require("../database/firebase")
var db = firebase.firestore();
var Razorpay = require('razorpay')

let instance = new Razorpay({
    key_id: 'rzp_live_3mWK5obhokVYg0', // your `KEY_ID`
    key_secret: '93YdSAQLyeeSv8QmGEqmE2lV' // your `KEY_SECRET`
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
exports.paymentssend = (req, res) => {
    try {
        db.collection("admin").doc(req.body.uemail).collection("wallet").doc(req.body.uemail).get().then(function (doc) {
            if (doc.data() != undefined) {
                db.collection("admin").doc(req.body.uemail).collection("wallet").doc(req.body.uemail).set({
                    name: req.body.name,
                    date: req.body.date,
                    amount: Number(doc.data().amount) + Number(req.body.amount),
                    phone: req.body.phone,
                    razorpay_payment_id: req.body.razorpay_payment_id,
                    razorpay_order_id: req.body.razorpay_order_id
                })
                    .then((doc) => {
                        db.collection("admin").doc(req.body.uemail).collection("history").doc().set({
                            date: req.body.date,
                            amount: req.body.amount,
                            status: "success"
                        })
                        res.send({ status: "okay" })
                    })
            } else {

                db.collection("admin").doc(req.body.uemail).collection("wallet").doc(req.body.uemail).set({
                    name: req.body.name,
                    date: req.body.date,
                    amount: req.body.amount,
                    phone: req.body.phone,
                    razorpay_payment_id: req.body.razorpay_payment_id,
                    razorpay_order_id: req.body.razorpay_order_id
                })
                    .then((doc) => {
                        db.collection("admin").doc(req.body.uemail).collection("history").doc().set({
                            date: req.body.date,
                            amount: req.body.amount,
                            status: "success"
                        })
                        res.send({ status: "okay" })
                    })
            }
        })
    } catch (error) {
        return res.send(false)
    }

}
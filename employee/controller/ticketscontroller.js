var express = require('express');
var app = express();
var firebase = require("../database/firebase")
var db = firebase.firestore();

var date = new Date();
var cdate = date.toLocaleString('en-US', { hour12: true })

exports.Flightticket = (req, res) => {
    res.render("flightticket")
}
exports.postFlightticket = (req, res) => {
    db.collection("admin").doc(req.body.uemail).get().then((snap) => {
        db.collection("Documents").doc(req.body.email).get().then((doc) => {
            if (doc.data() == undefined) {
                db.collection("Documents").doc(req.body.email).set({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,
                    passport: req.body.passport,
                    trip: req.body.trip,
                    FlightTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("new doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "new doc" })
                })
            } else {
                db.collection("Documents").doc(req.body.email).update({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,
                    passport: req.body.passport,
                    trip: req.body.trip,
                    FlightTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("update doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "update doc" })
                })
            }
        })
    })
}

exports.Thirupathiticket = (req, res) => {
    res.render("thirupathi")
}
exports.postThirupathiticket = (req, res) => {
    db.collection("admin").doc(req.body.uemail).get().then((snap) => {
        db.collection("Documents").doc(req.body.email).get().then((doc) => {
            if (doc.data() == undefined) {
                db.collection("Documents").doc(req.body.email).set({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,                
                    ThirupathiTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("new doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "new doc" })
                })
            } else {
                db.collection("Documents").doc(req.body.email).update({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,                
                    ThirupathiTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("update doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "update doc" })
                })
            }
        })
    })
}

exports.traintickets = (req, res) => {
    res.render("trainticket")

}
exports.posttraintickets = (req, res) => {
    db.collection("admin").doc(req.body.uemail).get().then((snap) => {
        db.collection("Documents").doc(req.body.email).get().then((doc) => {
            if (doc.data() == undefined) {
                db.collection("Documents").doc(req.body.email).set({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,                   
                    trip: req.body.trip,
                    TrainTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("new doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "new doc" })
                })
            } else {
                db.collection("Documents").doc(req.body.email).update({
                    appliedname: snap.data().uname,
                    appliedemail: snap.data().uemail,
                    appliedeph: snap.data().uphone,
                    date: cdate,
                    name: req.body.name,
                    number: req.body.number,
                    email: req.body.email,                  
                    trip: req.body.trip,
                    TrainTicket: {
                        aadhar: req.body.aadhar,
                        others: req.body.others,
                    }
                }).then(() => {
                    console.log("update doc")
                    db.collection("Documents").doc(req.body.email).update({
                        certificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                    }).then(() => { console.log("add certificate") })
                    res.send({ status: "update doc" })
                })
            }
        })
    })
}
var express = require('express');
var app = express();
var firebase = require("../database/firebase")
var db = firebase.firestore();

const moment=require("moment")

exports.insurence = (req, res) => {
    res.render("insurence")
}
exports.insurencebus = (req, res) => {
    res.render("insurencebus")
}
exports.postinsurencebus = (req, res) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var cdate =moment().format()
        //var cdate = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        var username = req.body.name
        var usernumber = req.body.number
        var udocid = username.split(" ").join("") + usernumber
        db.collection("admin").doc(req.body.uemail).get().then((snap) => {
            db.collection("Documents").doc(udocid).get().then((doc) => {
                if (doc.data() == undefined) {
                    db.collection("Documents").doc(udocid).set({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateBus: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence,
                        }
                    }).then(() => {
                        console.log("new doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "new doc" })
                    })
                } else {
                    db.collection("Documents").doc(udocid).update({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateBus: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence,
                        }
                    }).then(() => {
                        console.log("update doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "update doc" })
                    })
                }
            })
        })
    } catch (error) {
        return res.send(false)
    }
}
exports.insurenceauto = (req, res) => {
    res.render("insurenceauto")
}
exports.postinsurenceauto = (req, res) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var cdate =moment().format()
        //var cdate = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        var username = req.body.name
        var usernumber = req.body.number
        var udocid = username.split(" ").join("") + usernumber
        db.collection("admin").doc(req.body.uemail).get().then((snap) => {
            db.collection("Documents").doc(udocid).get().then((doc) => {
                if (doc.data() == undefined) {
                    db.collection("Documents").doc(udocid).set({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateAuto: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence,
                        }
                    }).then(() => {
                        console.log("new doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "new doc" })
                    })
                } else {
                    db.collection("Documents").doc(udocid).update({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateAuto: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence,
                        }
                    }).then(() => {
                        console.log("update doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "update doc" })
                    })
                }
            })
        })
    } catch (error) {
        return res.send(false)
    }
}
exports.insurencefour = (req, res) => {
    res.render("insurencefour")
}
exports.postinsurencefour = (req, res) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var cdate =moment().format()
        //var cdate = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        var username = req.body.name
        var usernumber = req.body.number
        var udocid = username.split(" ").join("") + usernumber
        db.collection("admin").doc(req.body.uemail).get().then((snap) => {
            db.collection("Documents").doc(udocid).get().then((doc) => {
                if (doc.data() == undefined) {
                    db.collection("Documents").doc(udocid).set({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateFour: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence
                        }
                    }).then(() => {
                        console.log("new doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "new doc" })
                    })
                } else {
                    db.collection("Documents").doc(udocid).update({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateFour: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence
                        }
                    }).then(() => {
                        console.log("update doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "update doc" })
                    })
                }
            })
        })
    } catch (error) {
        return res.send(false)
    }
}

exports.insurencetwo = (req, res) => {
    res.render("insurencetwo")
}
exports.postinsurencetwo = (req, res) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var cdate =moment().format()
        //var cdate = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        var username = req.body.name
        var usernumber = req.body.number
        var udocid = username.split(" ").join("") + usernumber
        db.collection("admin").doc(req.body.uemail).get().then((snap) => {
            db.collection("Documents").doc(udocid).get().then((doc) => {
                if (doc.data() == undefined) {
                    db.collection("Documents").doc(udocid).set({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateTwo: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence
                        }
                    }).then(() => {
                        console.log("new doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "new doc" })
                    })
                } else {
                    db.collection("Documents").doc(udocid).update({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        InsurenceCertificateTwo: {
                            front: req.body.front,
                            back: req.body.back,
                            side: req.body.side,
                            rc: req.body.rc,
                            others: req.body.others,
                            oldinsurence: req.body.oldinsurence,
                            licence: req.body.licence
                        }
                    }).then(() => {
                        console.log("update doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => { console.log("add certificate") })
                        res.send({ status: "update doc" })
                    })
                }
            })
        })
    } catch (error) {
        return res.send(false)
    }
}
exports.foodlicence = (req, res) => {
    res.render("foodlicence")
}
exports.postfoodlicence = (req, res) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var cdate =moment().format()
        //var cdate = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        var username = req.body.name
        var usernumber = req.body.number
        var udocid = username.split(" ").join("") + usernumber
        db.collection("admin").doc(req.body.uemail).get().then((snap) => {
            db.collection("Documents").doc(udocid).get().then((doc) => {
                if (doc.data() == undefined) {
                    db.collection("Documents").doc(udocid).set({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        foodlicence: {
                            declaration: req.body.declaration,
                            authority: req.body.authority,
                            aadhar: req.body.aadhar,
                            property: req.body.property,
                            others: req.body.others,
                            food: req.body.food,
                            bill: req.body.bill
                        }
                    }).then(() => {
                        console.log("new doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "new doc" })
                    })
                } else {
                    db.collection("Documents").doc(udocid).update({
                        udocid: udocid,
                        appliedname: snap.data().uname,
                        appliedemail: snap.data().uemail,
                        appliedeph: snap.data().uphone,
                        date: cdate,
                        name: req.body.name,
                        number: req.body.number,
                        email: req.body.email,
                        foodlicence: {
                            declaration: req.body.declaration,
                            authority: req.body.authority,
                            aadhar: req.body.aadhar,
                            property: req.body.property,
                            others: req.body.others,
                            food: req.body.food,
                            bill: req.body.bill
                        }
                    }).then(() => {
                        console.log("update doc")
                        db.collection("Documents").doc(udocid).update({
                            isOther: true,
                            othercertificates: firebase.firestore.FieldValue.arrayUnion(req.body.Certificatename)
                        }).then(() => {
                            if (snap.data().ureferral != undefined) {
                                var distributor = db.collection("distributor").doc(snap.data().ureferral).collection("wallet").doc(snap.data().ureferral)
                                distributor.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributor.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributor updated")
                                        })
                                    } else {
                                        distributor.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributor add")
                                        })
                                    }
                                })

                                var distributortotal = db.collection("distributor").doc(snap.data().ureferral).collection("total").doc(snap.data().ureferral)
                                distributortotal.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        distributortotal.update({
                                            amount: Number(2) + Number(docs.data().amount)
                                        }).then(() => {
                                            console.log("distributortotal updated")
                                        })
                                    } else {
                                        distributortotal.set({
                                            amount: Number(2)
                                        }).then(() => {
                                            console.log("distributortotal add")
                                        })
                                    }
                                })
                                var distributorbranch = db.collection("distributor").doc(snap.data().ureferral).collection("branch").doc(snap.data().uemail)
                                distributorbranch.get().then((docs) => {
                                    if (docs.data() != undefined) {
                                        if (docs.data().amount != undefined) {
                                            distributorbranch.update({
                                                amount: Number(2) + docs.data().amount
                                            }).then(() => {
                                                console.log("distributorbranch 2+ updated")
                                            })
                                        } else {
                                            distributorbranch.update({
                                                amount: 2
                                            }).then(() => {
                                                console.log("distributorbranch 2 updated")
                                            })
                                        }
                                    } else {
                                        distributorbranch.update({
                                            amount: 2
                                        }).then(() => {
                                            console.log("distributorbranch add")
                                        })
                                    }
                                })
                            }
                            console.log("add certificate")
                        })
                        res.send({ status: "update doc" })
                    })
                }
            })
        })
    } catch (error) {
        return res.send(false)
    }
}
var userid = localStorage.getItem("userid")

myinfo()
async function myinfo() {
    var userid = localStorage.getItem("userid")
    if (userid != null) {
        var myinfo = await axios.get(`https://api.smartwayonline.in/admin/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
        if (myinfo) {
            document.getElementById("name").value = myinfo[0].name
            document.getElementById("number").value = myinfo[0].number
            var today = moment().format("DD-MM-YYYY")
            document.getElementById("date").value = today
        }
    }
}

document.getElementById("addamount").addEventListener("click", async () => {
    var date = document.getElementById("date").value
    var name = document.getElementById("name").value
    var amount = document.getElementById("amount").value
    var number = document.getElementById("number").value
    if (date.length == 0) {
        toastr["error"]("Please Enter Date")
        return false
    } else if (amount.length == 0) {
        toastr["error"]("Please Enter Amount")
        return false
    } else {
        var paymentadd = await axios.post(`https://api.smartwayonline.in/payment/paymentadd`, {
            amount: amount * 100,
            currency: "INR",
            receipt: "su001",
            payment_capture: '1'
        }).then((res) => { return res.data }).catch((err) => { return false })
        if (paymentadd == false) return toastr["error"]("Server Error")
        if (paymentadd.status == "failed") return toastr["error"]("Something Wrong Try Again")
        pay(paymentadd.sub.id)
        function pay(id) {
            var options = {
                "key": "rzp_test_ZnW6wXU7kkU0Ys",  //Enter your razorpay key ()  rzp_live_3mWK5obhokVYg0
                "currency": "INR",
                "name": "Smart Way",
                "description": "Account Recharge",
                "image": "/public/img/logonew.png",
                // "order_id": document.getElementById('rzp-text').value,
                "order_id": id,
                "handler": function (response) {
                    sendpay(response)
                },
                "theme": {
                    "color": "#227254"
                }
            };
            var rzp = new Razorpay(options);

            rzp.open();
        }
        async function sendpay(res) {
            console.log(res)
            var paymentsend = await axios.post(`https://api.smartwayonline.in/payment/adminpaymentsend`, {
                userid: userid,
                wallet: Number(amount),
            }).then((res) => { return res.data }).catch((err) => { return false })            
            if (paymentsend !== true) return toastr["error"]("Something Wrong Contact Smart Way")
            const historyupdate = await axios.post(`https://api.smartwayonline.in/paymenthistory/create`, {
                name: name,
                paymentdate: date,
                amount: amount,
                number: number,
                razorpay_payment_id: res.razorpay_payment_id,
                razorpay_order_id: res.razorpay_order_id,
                userid: userid
            }).then((res) => { return res.data }).catch((err) => { return err.response })
            if (historyupdate.data != undefined) {
                toastr["error"](`${historyupdate.data}`)
                setTimeout(() => { window.location.reload() }, 2000)
            } else {
                toastr["success"](`Thank You...`)
                setTimeout(() => { window.location.replace("/payment") }, 2000)
            }
        }
    }
})
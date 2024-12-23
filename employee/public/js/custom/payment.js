var uemail=localStorage.getItem("uemail")
document.getElementById("addamount").addEventListener("click", () => {
    var date = document.getElementById("date").value
    var name = document.getElementById("name").value
    var amount = document.getElementById("amount").value
    var number = document.getElementById("number").value
    $.ajax({
        method: "POST",
        url: "/payment/paymentadd",
        data: {           
            amount: amount * 100,
            currency: "INR",
            receipt: "su001",
            payment_capture: '1'
        },
        success:(res)=>{            
            pay(res.sub.id)
        }
    })
    function pay(id) {
        var options = {
            "key": "rzp_test_7f8okAgx141QVW",  //Enter your razorpay key
            "currency": "INR",
            "name": "Sendanpets",
            "description": "Plan Subcription",
            "image": "https://previews.123rf.com/images/subhanbaghirov/subhanbaghirov1605/subhanbaghirov160500087/56875269-vector-light-bulb-icon-with-concept-of-idea-brainstorming-idea-illustration-.jpg",
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
    function sendpay(res){
        console.log(res)
        $.ajax({
            method: "POST",
            url: "/payment/paymentsend",
            data: {           
               name:name,
               date:date,
               amount:amount,
               phone:number,
               razorpay_payment_id:res.razorpay_payment_id,
               razorpay_order_id:res.razorpay_order_id,
               uemail:uemail
            },
            success:(res)=>{
                console.log(res)
                window.location.replace("/payment")
                
            }
        })
    }
})
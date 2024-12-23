var db = firebase.firestore();
var userid = localStorage.getItem("userid")
myinfo()
async function myinfo() {
    if (userid != null) {
        var myinfo = await axios.get(`https://api.smartwayonline.in/distributors/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
        if (myinfo) {
            document.getElementById("balance").innerHTML = myinfo[0].wallet
        }
    }
}

myhistory()
async function myhistory() {
    var myhistory = await axios.get(`https://api.smartwayonline.in/paymenthistory/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
    if (myhistory) {
        myhistory.forEach((historys) => {
            document.getElementById("history").innerHTML += `
                        <tr>
                        <td>
                        <div class="userDatatable-content">
                        ${moment(historys.date).format("DD-MM-YYYY")}
                    </div>
            		</td>
            		<td>
                        <div class="userDatatable-content text-success">
                            Success
                        </div>
            		</td>
            		<td>
                        <div class="userDatatable-content">
                        ₹ ${historys.amount}
                        </div>
                    </td>                  
            		</tr>`
        })
    }
}

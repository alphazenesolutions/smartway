myhistory()
async function myhistory() {
    var userid = localStorage.getItem("userid")
    var myhistory = await axios.get(`https://api.smartwayonline.in/paymenthistory/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
    if (myhistory) {
        myhistory.forEach((historys) => {
            console.log(historys)
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
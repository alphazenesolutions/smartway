myinfo()
async function myinfo() {
    var userid = localStorage.getItem("userid");
    if (userid != null) {
        var myinfo = await axios.get(`https://api.smartwayonline.in/distributors/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
        if (myinfo) {
            localStorage.setItem("referralcode", myinfo[0].referralcode)
            document.getElementById("referralcode").innerHTML = myinfo[0].referralcode
        }


        var balance = await axios.get(`https://api.smartwayonline.in/distributors/balance/${userid}`).then((res) => { return res.data }).catch((err) => { return false })
        console.log(balance)
        if (balance.length != 0) {
            if (balance) {
                document.getElementById("availabe_earning").innerHTML = balance[0].availabe_earning
                document.getElementById("total_earning").innerHTML = balance[0].total_earning
            }
        }

        var referralcode = localStorage.getItem("referralcode")
        var branch = await axios.get(`https://api.smartwayonline.in/distributors/branch/${referralcode}`).then((res) => { return res.data }).catch((err) => { return false })
        console.log(branch.length)
        if (branch) {
            document.getElementById("branchcount").innerHTML = branch.length
            if (branch.length != 0) {
                branch.forEach((branch) => {
                    document.getElementById("Regdata").innerHTML += `
            <tr class='Regdata'>
            <td>
            <div class="userDatatable-content">
                ${branch.name}
            </div>
		</td>
		<td>
            <div class="userDatatable-content">
                ${branch.email}
            </div>
		</td>
		<td>
            <div class="userDatatable-content">
                ${branch.number}
            </div>
		</td>
		<td>
            <div class="userDatatable-content">
                ${branch.location}
            </div>
		</td>
		</tr>`
                })
            }
        }


    }
}
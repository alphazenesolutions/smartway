var express = require("express")
var app = express()
var bodyparser = require('body-parser')
var dotenv=require("dotenv")
var morgan=require("morgan")
var path = require("path")
var Razorpay = require('razorpay')
var port = 1202
//view engine
app.set("view engine", "ejs")

//static folders
app.use("/public", express.static(path.join(__dirname, "/public")))
app.use("/views", express.static(path.join(__dirname, "/views")))
app.use("/database", express.static(path.join(__dirname, "/database")))

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(morgan("dev"))

// route init
var testpage = require("./routers/test")
var certificatepage = require("./routers/certificate")
var ticketspage = require("./routers/tickets")
var insurancepage = require("./routers/insurance")
var passportpage = require("./routers/passport")
var paymentpage = require("./routers/payment")
var loginpage = require("./routers/login")
var registerpage = require("./routers/register")
var dashboardpage = require("./routers/dashboard")
var aadharpage = require("./routers/aadhar")


app.use("/test", testpage)
app.use("/dashboard", dashboardpage)
app.use("/certificate", certificatepage)
app.use("/tickets", ticketspage)
app.use("/insurance", insurancepage)
app.use("/passport", passportpage)
app.use("/payment", paymentpage)
app.use("/register", registerpage)
app.use("/", loginpage)
app.use("/aadhar", aadharpage)


app.get("/download/:certificatename/:certificateid", (req, res) => { 
   const {certificatename,certificateid}=req.params   
   console.log(certificatename,certificateid);
   res.render("downloads",{certificatename:certificatename,certificateid:certificateid});
});

app.get("/downloads/:id", (req, res) => {    
   res.render("downloads",{url:req.params.id});
});
app.get("/history", (req, res) => {
    res.render("history")
});
app.get("/adminhistory", (req, res) => {    
    res.render("adminhistory")
});
app.get("/clientreg", (req, res) => {    
    res.render("clientreg")
});

app.get("/add-client", (req, res) => {
   res.render("add-client")
});
app.get("/tickets", (req, res) => {
   res.render("support")
});
app.get("/passportnew", (req, res) => {
    res.render("passportnew")
 });
 app.get("/passportrenewal", (req, res) => {
    res.render("passportrenewal")
 });
 app.get("/policeclearance",(req,res)=>{
     res.render("policeclearance")
 })
 app.get("/pan",(req,res)=>{
    res.render("pan")
})
app.get("/certificates", (req, res) => {
   res.render("certificate")
})
app.get("/childrenewal", (req, res) => {
   res.render("childrenewal")
})

app.get("/distributor", (req, res) => {
   res.render("distributor")
});
app.get("/add-distributor", (req, res) => {
   res.render("add-distributor")
});
app.get("/pendingcertificate", (req, res) => {
   res.render("pendingcertificate")
});
app.get("/marquee", (req, res) => {
   res.render("marquee")
});
app.get("/retailers", (req, res) => {
   res.render("retailers")
});
app.get("/distributorreq", (req, res) => {
   res.render("distributorreq")
});
app.get("/distributors", (req, res) => {
   res.render("distributors")
});
app.get("/addadmin", (req, res) => {
   res.render("add-semiadmin")
});
app.get("/employee", (req, res) => {
   res.render("employee")
});
app.get("/OAB", (req, res) => {
   res.render("OAB")
});
app.get("/widow-pension", (req, res) => {
   res.render("widow-pension")
});
app.get("/farmer-certificate", (req, res) => {
   res.render("farmer-certificate")
});
app.get("/migration-certificate", (req, res) => {
   res.render("migration-certificate")
});

app.get("/certificates",(req,res)=>{
   res.render("certificate")
})
app.get("/allcertificates",(req,res)=>{
   res.render("allcertificates")
})
app.get("/othercertificates",(req,res)=>{
   res.render("othercertificates")
})
app.get("/pancertificates",(req,res)=>{
   res.render("pancertificates")
})

app.get("/allcertificateshistory",(req,res)=>{
   res.render("allhistory")
})
app.get("/othercertificateshistory",(req,res)=>{
   res.render("otherhistory")
})
app.get("/pancertificateshistory",(req,res)=>{
   res.render("panhistory")
})

app.get("/pendingallcertificateshistory",(req,res)=>{
   res.render("pendingallcertificates")
})
app.get("/pendingothercertificateshistory",(req,res)=>{
   res.render("pendingothercertificates")
})
app.get("/pendingpancertificateshistory",(req,res)=>{
   res.render("pendingpancertificates")
})
app.get("/tickets/:id",(req,res)=>{
   res.render("supportview",{url:req.params.id})
})
app.get("/wallethistory",(req,res)=>{
   res.render("wallethistory")
})

app.get("/index", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, (req, res) => {
    console.log(`app running on port http://localhost:${port}`)
})


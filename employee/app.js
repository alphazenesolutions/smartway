var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
var Razorpay = require("razorpay");
var port = 1206;
//view engine
app.set("view engine", "ejs");

//static folders
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/views", express.static(path.join(__dirname, "/views")));
app.use("/database", express.static(path.join(__dirname, "/database")));

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/tickets", (req, res) => {
  res.render("support");
});

app.get("/tickets/:id", (req, res) => {
  res.render("supportview", { url: req.params.id });
});

// route init

var ticketspage = require("./routers/tickets");
var loginpage = require("./routers/login");

app.use("/tickets", ticketspage);
app.use("/", loginpage);

app.get("/download/:certificatename/:certificateid", (req, res) => {
  const { certificatename, certificateid } = req.params;
  res.render("downloads", {
    certificatename: certificatename,
    certificateid: certificateid,
  });
});

app.get("/pendingcertificate", (req, res) => {
  res.render("pendingcertificate");
});
app.get("/marquee", (req, res) => {
  res.render("marquee");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/pendingallcertificateshistory", (req, res) => {
  res.render("pendingallcertificates");
});
app.get("/pendingallcertificateshistory2", (req, res) => {
  res.render("pendingallcertificate2");
});
app.get("/Adhaar_Fssai", (req, res) => {
  res.render("Adhaar_Fssai");
});
app.get("/VoterId", (req, res) => {
  res.render("VoterId");
});
app.get("/VoterId_update", (req, res) => {
  res.render("VoterId_update");
});
app.get("/Smartcard", (req, res) => {
  res.render("Smartcard");
});
app.get("/Smartcard_update", (req, res) => {
  res.render("Smartcard_update");
});

app.get("/pendingothercertificateshistory", (req, res) => {
  res.render("pendingothercertificates");
});
app.get("/Fssai", (req, res) => {
  res.render("Fssai");
});
app.get("/pendingpancertificateshistory", (req, res) => {
  res.render("pendingpancertificates");
});
app.get("/pendingPaneUpdate", (req, res) => {
  res.render("pendingPaneUpdate.ejs");
});
app.get("/pendingpassport", (req, res) => {
  res.render("pendingpassport");
});
app.get("/ticketbooking", (req, res) => {
  res.render("ticketbooking");
});
app.listen(port, (req, res) => {
  console.log(`app running on port http://localhost:${port}`);
});

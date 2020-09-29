const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var details = {
  collegeName: "NA",
  branchName: "NA",
  yearOfStudy: "NA",
  attendance: "NA",
  procPhNo: "NA",
  procFName: "NA",
  procLName: "NA",
  studPhNo: "NA",
  studRlNo: "NA",
  studFName: "NA",
  studLName: "NA"
};

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/academics", function(req, res) {
  res.render("academics");
});

app.post("/academics", function(req, res) {
  details.collegeName = req.body.college;
  details.branchName = req.body.branch;
  details.yearOfStudy = req.body.year;
  res.render("index");
});

app.get("/attendance", function(req, res) {
  res.render("attendance");
});

app.post("/attendance", function(req, res){
  details.attendance = req.body.attendance;
  res.render("index");
})

app.get("/details", function(req, res) {
  res.render("details", {details: details});
});

app.get("/proctor", function(req, res) {
  res.render("proctor");
});

app.post("/proctor", function(req, res){
  details.procFName = req.body.pfName;
  details.procLName = req.body.plName;
  details.procPhNo = req.body.pphNo;
  res.render("index");
});

app.get("/student", function(req, res) {
  res.render("student");
});

app.post("/student", function(req, res){
  details.studFName = req.body.sfName;
  details.studLName = req.body.slName;
  details.studPhNo = req.body.sphNo;
  details.studRlNo = req.body.rlNo;
  res.render("index");
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});

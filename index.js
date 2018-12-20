const express = require("express");
var app = express();
const hbs = require("hbs");
var port = process.env.PORT || 3000;

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + "/public"));

app.use((req,res,next) => {

var url = req.url;
  res.render("maintenance.hbs");

next();

});

hbs.registerHelper('getTime',() => {
  return "Mohammad Reza2";
});

app.get("/",(req,res) => {
  res.render('index.hbs',{
  });
});
app.listen(port,() => {
  console.log(`Server is Running on port ${port}`);
});

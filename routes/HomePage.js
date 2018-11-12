
var ejs = require("ejs");
var mysql = require('./mysql');

function goToHomePage(req,res){
   // mysql.getPoolConnection();

    ejs.renderFile('./views/HomePage.ejs',function (err,result){
     if(!err){
         res.end(result);
     }
      else{
         res.end('Error');
         console.log(err);
     }
  });
}

exports.goToHomePage = goToHomePage;
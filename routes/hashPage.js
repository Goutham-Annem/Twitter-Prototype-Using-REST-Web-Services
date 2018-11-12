
var ejs = require("ejs");

function HashPageSuccess(req, res){

    ejs.renderFile('./views/HashPage.ejs',function (err,result){
        if(!err){

            res.end(result);
        }
        else{
            res.end('ERROR');
            console.log(err);
        }
    });
}

exports.HashPageSuccess = HashPageSuccess;
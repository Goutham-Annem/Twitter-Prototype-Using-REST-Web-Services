
var ejs = require("ejs");

function goToOtherProfile(req,res){

    ejs.renderFile('./views/OtherProfile.ejs',function (err,result){
        if(!err){

            res.end(result);
        }
        else{
            res.end('ERROR');
            console.log(err);
        }
    });
}

exports.goToOtherProfile = goToOtherProfile;
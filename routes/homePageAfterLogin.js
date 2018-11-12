
var ejs = require("ejs");

function homePageWhenLogin(req, res){

    /*ejs.renderFile('./views/userInfo.ejs',function (err,result){
        if(!err){
            res.end(result);
        }
        else{
            res.end('An error Occurred');
            console.log(err);
        }
    });*/
    if(req.session.handle)
    {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render("homePageWhenLogin",{handle:req.session.handle});
    }
    else
    {
        res.redirect('/');
    }
}

exports.homePageWhenLogin = homePageWhenLogin;
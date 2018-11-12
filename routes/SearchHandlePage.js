
var ejs = require("ejs");

function SearchHandlePage(req, res){

    ejs.renderFile('./views/SearchHandlePage.ejs',function (err,result){
        if(!err){

            res.end(result);
        }
        else{
            res.end('An error Occurred');
            console.log(err);
        }
    });
}

exports.SearchHandlePage = SearchHandlePage;
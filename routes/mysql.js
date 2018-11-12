
var ejs= require('ejs');
var mysql = require('mysql');
var pooling = require('./ConnectionPool.js');
/*function getConnection(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'twitter',
        port	 : 3306
    });
    return connection;
}

*/

/*function getPoolConnection(){
    //connection = pooling.initializeConnection();
    connection = pooling.getConnection();
    console.log("Connection Created");
}*/



function fetchData(callback,sqlQuery)
{
    console.log("In fetch Data");
    console.log("SQLquery is:::"+sqlQuery);
     //var connection = getConnection();
/*    console.log("Connection object----"+connection.getConnection());

    console.log("Connection object in fetch data :"+connection.getConnection().message);*/

    var  connection = pooling.getConnection();

    connection.query(sqlQuery, function(err,rows,fields){

            if(err)
            {
                console.log("Error :"+err.message);

            }
            else
            {

                pooling.returnConnection(connection);
               //console.log("Result is :" + rows);
                callback(err, rows);
            }
    })
}

/*function insertData(callback,sqlQuery)
{
   // console.log("In insert Data");
    var  connection = pooling.getConnection();

    connection.getConnection().query(sqlQuery,function(err,rows,fields){
       // console.log("Query applied ");
        if(err)
        {
            console.log("Error While Inserting :"+err.message);
            callback(err,rows);
        }
        else
        {
            pooling.returnConnection(connection);
            callback(err,rows);
        }
    })

}

function fetchUser(callback,sqlQuery)
{
    var  connection = pooling.getConnection();

    connection.getConnection().query(sqlQuery, function(err,rows,fields){

        if(err)
        {
            console.log("Error :"+err.message);

        }
        else
        {
           // console.log("Result is :" + rows);
            pooling.returnConnection(connection);
            callback(err, rows);
        }
    })
}*/
exports.fetchData = fetchData;



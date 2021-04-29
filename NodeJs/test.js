var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : '2009'
});

connection.connect();

var sql = "select * from p_goods";
console.log(sql)
connection.query(sql, function (error, results, fields) {
    console.log(results)
});

connection.end();
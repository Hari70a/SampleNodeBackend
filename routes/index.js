var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: "",
	database:'testdb'
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/users', function(req, res, next) {
// 	console.log(req,res)
// 	connection.query("SELECT * FROM users",function(req,res,err){
// 		console.log(err,res,"res")
// 		if(err) console.log(err)
//   	//if(row.length > 0){
//   	  //res.send(JSON.stringify(result))
//   	///}
//   	else{
//   		res.send(JSON.stringify(res))
//   	  //res.send({"success": false, "message":"User not found.Please try again later"});
//   	}	
//   })
// 	//res.send('respond with a resource');
// })	
module.exports = router;

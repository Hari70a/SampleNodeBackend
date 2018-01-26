var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: "",
	database:'testdb'
})
/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query("SELECT * FROM users",function(err,result){
		console.log(err,res,"res")
		if(err) console.log(err)
  	else if(result.length > 0){
  	  console.log("length > 0")	
  	  res.send(JSON.stringify(result))
  	}
  	else{
  	//	res.send(JSON.stringify(res))
  	  res.send({"success": false, "message":"User not found.Please try again later"});
  	}	
  })
})
//JSON.stringify(({"success": true, "message":"Users available"}))
// router.post('/', function(req, res, next) {
//   var username = req.body.username
//   var password = req.body.password	
//   connection.query("SELECT * FROM users WHERE username = ? AND password = ?",[username, password],function(err,row,fields){
//   	if(err) console.log(err)
//   	if(row.length > 0){
//   	  res.send({"success": true, "message":row[0].username})
//   	}
//   	else{
//   	  res.send({"success": false, "message":"User not found.Please try again later"});
//   	}	
//   })

  
//});

module.exports = router;

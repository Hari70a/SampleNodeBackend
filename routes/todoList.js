var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: "",
	database:'testdb'
})
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query("SELECT * FROM todos",function(err,result){
		console.log(err,result,"res")
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
router.post('/create', function(req, res, next) {
	console.log(req.body,"INN post calll")
	var description = req.body.description
	console.log(description,"description")
	connection.query("INSERT INTO `todos` (`description`) VALUES ('"+description+"')",function(err,result){
		console.log(err,result,"res")
		if(err) console.log(err)
  	else{
  	//	res.send(JSON.stringify(res))
  	  res.send({"success": true, "message":"Todo created"});
  	}	
  })
})
router.patch('/update/:id', function(req, res, next) {
	console.log(req.body,"INN patch calll")
	var id= req.params.id
	var description = req.body.description
	console.log(id,description,"description")
	connection.query("UPDATE todos SET description='"+description+"'WHERE id="+id,function(err,result){
		console.log(err,result,"res")
		if(err) console.log(err)
  	else{
  	//	res.send(JSON.stringify(res))
  	  res.send({"success": true, "message":"Todo updated"});
  	}	
  })
})
router.delete('/delete/:id', function(req, res, next) {
	console.log(req.body,"INN patch calll")
	var id= req.params.id
	console.log(id,"description")
	connection.query("DELETE FROM todos WHERE id="+id,function(err,result){
		console.log(err,result,"res")
		if(err) console.log(err)
  	else{
  	//	res.send(JSON.stringify(res))
  	  res.send({"success": true, "message":"Todo deleted"});
  	}	
  })
})
// app.update('/raw', (req, res) => {

//   // output the headers
//   console.log(req.headers);

//   // capture the encoded form data
//   req.on('data', (data) => {
//     console.log(data.toString());
//   });

//   // send a response when finished reading
//   // the encoded form data
//   req.on('end', () => {
//     res.send('ok');
//   });
// });
// // router.post('/is', function(req, res, next) {
//   var username = req.body.username
//   var password = req.body.password	
//   connection.query("INSERT into todos",function(err,row){
//   	if(err) console.log(err)
//   	if(row.length > 0){
//   	  res.send({"success": true, "message":JSON,stringify(row)})
//   	}
//   	else{
//   	  res.send({"success": false, "message":"User not found.Please try again later"});
//   	}	
//   })
// })
  
//});

module.exports = router;

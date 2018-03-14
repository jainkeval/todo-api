var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;



app.get("/", function(req, res){
	res.send("landing");
})



app.listen(port, process.env.IP, function(){
	console.log("started!!");
})

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.send("landing");
})

app.use('/todos', todoRoutes);



app.listen(port, process.env.IP, function(){
	console.log("started!!");
})

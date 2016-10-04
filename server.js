var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});
app.get('/article2', function (req, res) {
  res.send('article 1 will be sent');
});

var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
}); 

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

//change the text of main text div
//var element = document.getElementById('app-text');
//element.InnerHTML = 'new';

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req,res) {
    //Get the name from req
    var name = req.params.name;
    names.push(name);
    //JSON: JavaScript Object Notation
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});
app.listen(4000);
console.log('Running on http://localhost:' + 4000);
console.log('started');

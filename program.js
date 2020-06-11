const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
var path = require('path')



app.use('/', express.static('public_static'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend.html'))
});



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://root:210497@cluster0-4qchi.gcp.mongodb.net/Kaigan?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Kaigan")
//   dbo.createCollection("unitInfo", function(err, res){
//       if (err) throw err;
//       console.log("Collection created!")
//       db.close()
//   })
// });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
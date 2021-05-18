const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/queries.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 4000;



app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/*', function(req, res) {
  var filePath = 'thru-hike/client/dist/index.html'
  var resolvedPath = path.resolve(filePath);

})

app.post('/dailyfood', function(req, res) {
// console.log("REQ.BODY", req.body)
db.createMeal(req.body)


res.status(200).send('sent')
})


app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});
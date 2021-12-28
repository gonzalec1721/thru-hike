const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../database/queries.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4000;

app.use(express.static(path.join(__dirname, "/../client/dist")));

// app.get('/*', function(req, res) {
//   let trip = req.query.trip
//   var filePath = 'thru-hike/client/dist/index.html'
//   var resolvedPath = path.resolve(filePath);
//  /*db.getMeals(trip, function(trip){
//    res.status(200).send(trip)
//  })*/
//     //console.log('server',result)

// })

app.post("/dailyfood", function (req, res) {
  console.log("REQ.BODY", req.body);
  db.createMeal(req.body);
  res.status(200).send("sent");
});

// app.post('/allmeals', (req, res) => {

//  var trip = req.body.tripName

//   db.getMeals(trip, function(trip){
//     res.status(200).send(trip)
//   })

// })

app.delete("/meal", (req, res) => {
  let params = req.query.id;
  let idsToDelete = [];
  console.log(params);
  for (let i = 0; i < params.length; i++) {
    idsToDelete.push(Number(params[i]));
  }
  console.log("idstodelete", idsToDelete);

  db.deleteMeal(idsToDelete, function (suc) {
    console.log("Delete successful", suc);
  });
});

app.post("/allmeals", (req, res) => {
  var trip = [req.body.tripName, req.body.day];

  db.getMeals(trip, function (days) {
    res.status(200).send(days);
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});

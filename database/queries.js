const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Pool = require("pg").Pool;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const pool = new Pool({
  user: "codygonzalez",
  host: "localhost",
  database: "thru_hike",
  password: "Clooney1!",
  port: 5432,
});

const createMeal = (req, res) => {
  const { trip, totalCal, meals } = req;
  //  console.log('DB', req)
  req.meals.map((el) => {
    var trip = req.trip;
    var day = req.day;
    var totalCal = req.totalCal;
    var mealName = el.meal;
    var calories = el.calories;
    //console.log(trip, totalCal, mealName, calories)

    pool.query(
      "INSERT INTO DailyMeal (Trip, Day, TotalCal, MealName, CalperMeal) VALUES ($1, $2, $3, $4, $5)",
      [trip, day, totalCal, mealName, calories],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log("Insert Successful!");
      }
    );
  });
};

const getMeals = function (tripName, callback) {
  // const { trip, totalCal, meals } = req
  var hike = tripName;
  // console.log('db', hike)
  pool.query(
    "SELECT * FROM dailymeal WHERE trip = $1 AND Day = $2",
    [hike[0], hike[1]],
    (error, results) => {
      if (error) {
        throw error;
      }

      callback(results.rows);
    }
  );
};

const deleteMeal = function (id, cb) {
  pool.query("DELETE FROM dailymeal WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
    }
    cb("Deleted");
  });
};

module.exports = {
  createMeal,
  getMeals,
  deleteMeal,
};

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Pool = require('pg').Pool

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const pool = new Pool({
  user: 'codygonzalez',
  host: 'localhost',
  database: 'thru_hike',
  password: 'Clooney1!',
  port: 5432,
})

const createMeal = (req, res) => {
 const { trip, totalCal, meals } = req
 console.log('melas', req)
 req.meals.map((el)=>{
var trip = req.trip
var totalCal = req.totalCal
var mealName = el.meal
var calories = el.calories
//console.log(trip, totalCal, mealName, calories)

   pool.query('INSERT INTO DailyMeal (Trip, TotalCal, MealName, CalperMeal) VALUES ($1, $2, $3, $4)', [trip, totalCal, mealName, calories], (error, results) => {
       if (error) {
           throw error
         }
         console.log('Insert Successful!')
       })
      })
}

const getMeals = (callback) => {
  // console.log(req)
  // const { trip, totalCal, meals } = req
   pool.query("SELECT * FROM dailymeal WHERE trip = 'Hike'", (error, results) => {
     if (error) {
       throw error
     }
   callback(results.rows)
   })
 }

module.exports = {
 createMeal,
 getMeals
}
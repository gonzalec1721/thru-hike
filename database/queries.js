const Pool = require('pg').Pool
const pool = new Pool({
  user: 'codygonzalez',
  host: 'localhost',
  database: 'thru_hike',
  password: 'Clooney1!',
  port: 5432,
})

const createMeal = (req, res) => {
// console.log('req', request)
// console.log('re.b', request.body)
 const { trip, totalCal, meals } = req


  pool.query('INSERT INTO DailyMeal (Trip, meal, calories) VALUES ($1, $2, $3)', [trip, totalCal, meals ], (error, results) => {
    if (error) {
      throw error
    }
    console.log('Insert Successful!')
  })
}

module.exports = {
 createMeal
}
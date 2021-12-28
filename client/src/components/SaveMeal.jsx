import React from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'



const SaveMeal= ({ meals, trip, days }) => {
  let history = useHistory()

  //console.log('send', meals, trip, days)

  const handleSave = () =>{
   // history.push("/")
  //  console.log('totalCal', meals.totalCal)
  //  console.log('meals', meals.meals)

console.log('hey',meals)
   let send = {
     trip: trip,
     day: days,
     totalCal: meals[0].calorie,
     meals: meals[0].meals
   }
   console.log('lowhey')
console.log('send',send)
   axios.post('/dailyfood', send)
   .then((response) => {
     console.log('res',response)

    })
    .catch((error) => {
      console.log(error.response)
    })
    //location.reload();

  }

    return (
      <div>



        <button className = 'savebutton'type="button"  onClick={handleSave}>Save Your Meal</button>
      </div>
    );

}

export default SaveMeal;
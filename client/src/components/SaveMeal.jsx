import React from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'



const SaveMeal= ({ meals }) => {
  let history = useHistory()



  const handleSave = () =>{
   // history.push("/")
  //  console.log('totalCal', meals.totalCal)
  //  console.log('meals', meals.meals)


   let send = {
     trip: meals.trip,
     day: meals.day,
     totalCal: meals.totalCal,
     meals: meals.meals
   }

   axios.post('/dailyfood', send)
   .then((response) => {
     console.log("res", response)

    })
    .catch((error) => {
      console.log(error.response)
    })
    location.reload();

  }

    return (
      <div>



        <button className = 'savebutton'type="button"  onClick={handleSave}>Save Your Meal</button>
      </div>
    );

}

export default SaveMeal;
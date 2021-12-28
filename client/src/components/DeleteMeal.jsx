import React, { Component } from 'react'
import axios from 'axios'

export default function DeleteMeal ({tripInfo, mealInfo}){
  console.log('DELETE',tripInfo)


 const handleDelete = (e)=>  {

let send = tripInfo.id

console.log('del')
axios.delete('/meal', { params: { id: send } })
  .then((res) => {
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
  }



    return (
      <div>

      <button className='deletebutton' onClick={handleDelete}>Delete</button>
      </div>
    )

}


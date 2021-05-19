import React from 'react';
import axios from 'axios';
import MealsDisplay from './MealsDisplay.jsx'

class AllMeals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trip: '',
      meals: []
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleGet=this.handleGet.bind(this)
  }
handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleGet(){
  console.log(this.state.trip)
  let trips = {
    tripName: this.state.trip
  }
  console.log(trips)

    axios.post('/allmeals', trips)
  .then((response)=>{
   this.setState({
     meals: response.data
   })
  })
  .catch((error)=>{
    console.log(error.response)
  })
}




  render() {
// console.log(this.state.meals)
// // this.state.meals.map((el)=>{
// //   console.log(el)
// // })

    return (

<div id='container'>
  {/* <form> */}
    <input type='text' placeholder='Name Of Your Trip' onChange={this.handleChange} name='trip'></input>
    <input type="submit" onClick={this.handleGet} value="Get All Meals" />
    <MealsDisplay allmeals={this.state.meals}/>
  {/* </form> */}
{/* <button>Get All Meals</button> */}
</div>

    )

  }
}



export default AllMeals;
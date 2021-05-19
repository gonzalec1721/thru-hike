import React from 'react';
import axios from 'axios';

class MealsDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalInfo : {},
      mealInfo: [],
      trip: ''
    }

  }

componentDidUpdate(){



// var output = {}
// var outputMeals = []
      // this.props.allmeals.map((el)=>{
      //   // console.log(el)
      //   this.state.trip = el.trip
      //   if(output.trip === undefined){
      //    output.trip = el.trip
      //    output.totalCal = el.totalcal
      //   }
      //   outputMeals.push(el.mealname, el.calpermeal)

      //   })
        // this.state.totalInfo = output
        // this.state.mealInfo = outputMeals

      }




  render() {
    var output = {}
var outputMeals = []
    this.props.allmeals.map((el)=>{
      // console.log(el)
      // this.state.trip = el.trip
      if(output.trip === undefined){
       output.trip = el.trip
       output.totalCal = el.totalcal
      }
      outputMeals.push(el.mealname, el.calpermeal)

      })
     this.state.totalInfo = output
         this.state.mealInfo = outputMeals

this.state.mealInfo.map((eachMeal)=>{
  console.log(eachMeal)
})

    return (
<>
<br/><br/>
{'Trip Name  '}{this.state.totalInfo.trip}
<br/><br/>
{this.state.totalInfo.totalCal}
<br/><br/>
<div className='allmeals'>
{this.state.mealInfo.map((eachMeal, index)=>{
  return(
    <h4>{eachMeal}</h4>
  )
})}
</div>
</>

    )

  }
}



export default MealsDisplay;
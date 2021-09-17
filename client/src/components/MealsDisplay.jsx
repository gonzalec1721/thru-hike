import React from 'react';
import axios from 'axios';
import DeleteMeal from './DeleteMeal.jsx'

class MealsDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalInfo : {},
      mealInfo: [],
      trip: '',
      edit: false
    }
this.handleEdit = this.handleEdit.bind(this)
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


handleEdit(){
  console.log('edit')
  console.log(this.state.totalInfo)
  this.setState({
    edit:true
  })

}

  render() {
    var output = {}
var outputMeals = []
    this.props.allmeals.map((el)=>{
       //console.log('el',el)
      // this.state.trip = el.trip
      if(output.trip === undefined){
        output.id = el.id
       output.trip = el.trip
       output.totalCal = el.totalcal
       output.day = el.day

      }
      outputMeals.push(el.mealname, el.calpermeal)

      })
     this.state.totalInfo = output
         this.state.mealInfo = outputMeals

this.state.mealInfo.map((eachMeal)=>{
// console.log('Each',eachMeal)
})

    return (
<div >
<br/><br/>
<p>Trip Name: </p>{this.state.totalInfo.trip}
<br/><br/>
<p>Total Calories:</p>
{this.state.totalInfo.totalCal}
<br/><br/>
<p>Day:  <button onClick={this.handleEdit}>Edit Day</button></p>
{this.state.edit ? <DeleteMeal tripInfo={this.state.totalInfo} mealInfo={this.state.mealInfo}/> : ''}

{this.state.totalInfo.day}
<br/><br/>
<div className='allmeals'>
{this.state.mealInfo.map((eachMeal, index)=>{

  return(
    <div key={index}>

    <h4>{eachMeal}</h4>

    </div>
  )
})}
</div>
</div>

    )

  }
}



export default MealsDisplay;
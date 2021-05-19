import React from 'react';
import axios from 'axios';

class AllMeals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trip: ''
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
  let trip = this.state.trip
    axios.get('/*', trip)
  .then((response)=>{
    console.log('clinet', response)
  })
  .catch((error)=>{
    console.log(error.response)
  })

}


  render() {
    console.log(this.state)
    return (

<div>
  <form>
    <input type='text' placeholder='Name Of Your Trip' onChange={this.handleChange} name='trip'></input>
    <input type="submit" onSubmit={this.handleGet} value="Get All Meals" />
  </form>
{/* <button>Get All Meals</button> */}
</div>

    )

  }
}



export default AllMeals;
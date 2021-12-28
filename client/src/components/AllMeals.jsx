import axios from "axios";
import MealsDisplay from "./MealsDisplay.jsx";
import React, { useState } from "react";

export default function AllMeals() {
  const initialValues = {
    day: "",
    trip: "",
  };
  const [meals, setMeals] = useState([]);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleGet = (e) => {

    let trips = {
      tripName: values.trip,
      day: values.day,
    };

    axios
      .post("/allmeals", trips)
      .then((response) => {
        console.log("client res", response);
        setMeals(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

  };

  return (
    <div id="container">
      <h2>Your Meals</h2>
      {/* <form> */}
      <input
        type="text"
        placeholder="Name Of Your Trip"
        onChange={handleChange}
        name="trip"
      ></input>
      <br /> <br />
      <input
        type="text"
        placeholder="Day"
        onChange={handleChange}
        name="day"
      ></input>
      <br /> <br />
      <input
        className="getallmealsbutton"
        type="submit"
        onClick={handleGet}
        value="Get All Meals"
      />
      <MealsDisplay allmeals={meals} />
      {/* </form> */}
      {/* <button>Get All Meals</button> */}
    </div>
  );
}

// class AllMeals extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       trip: '',
//       day:'',
//       meals: []
//     }
//     this.handleChange=this.handleChange.bind(this)
//     this.handleGet=this.handleGet.bind(this)
//   }
// handleChange(e){
//   this.setState({
//     [e.target.name]: e.target.value
//   })
//   this.setState({
//     [e.target.name]: e.target.value
//   })

// }

// handleGet(){

//   let trips = {
//     tripName: this.state.trip,
//     day: this.state.day
//   }

//     axios.post('/allmeals', trips)
//   .then((response)=>{
//     console.log('client res', response)
//    this.setState({
//      meals: response.data
//    })
//   })
//   .catch((error)=>{
//     console.log(error.response)
//   })
// }

//   render() {
// // console.log(this.state.meals)
// // // this.state.meals.map((el)=>{
// // //   console.log(el)
// // // })

//     return (

// <div id='container'>
//   <h2>Your Meals</h2>
//   {/* <form> */}
//     <input type='text' placeholder='Name Of Your Trip' onChange={this.handleChange} name='trip'></input>
//     <br/> <br/>
//     <input type='text' placeholder='Day' onChange={this.handleChange} name='day'></input>
//     <br/> <br/>
//     <input className='getallmealsbutton' type="submit" onClick={this.handleGet} value="Get All Meals" />

//     <MealsDisplay allmeals={this.state.meals}/>
//   {/* </form> */}
// {/* <button>Get All Meals</button> */}
// </div>

//     )

//   }
// }

// export default AllMeals;
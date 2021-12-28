import React, { useState, useEffect, useRef } from "react";
// import AddMeal from "./AddMeal.jsx";
import SaveMeal from "./SaveMeal.jsx"



export default function DailyFood () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toggle: false,
  //     totalCal: 0,
  //     trip: '',
  //     day: '',
  //     meals: [{ meal: "", calories: "" }]
  //   };

  // }
  const stateRed = useRef()
  const [toggle, setToggle] = useState(false)
  const [totalCal, setTotalcal] = useState(0)
  const [trip, setTrip] = useState('')
  const [day, setDay] = useState('')
  const [meals, setMeals] = useState([{ meals: "", calorie: "" }])
useEffect(()=> {

  console.log('use', handleMealSumbit())
        if(totalCal>= 3000){
          console.log('inside')
          setToggle(true)

        }
      //}

      if(totalCal>=3000){
        console.log('total')
        return <SaveMeal/>
      }



},[totalCal])
  // const prevMealRef = useRef();


  // useEffect(() => {
  //   prevMealRef.current = meals;

  // });
  // console.log(prevMealRef.current)
  // const prevMeal = prevMealRef.current;
  // const prevMEALS = usePrevious(meals)


  const handleMeal =(e)=> {
    //function usePrevious(value) {
      stateRed.current = meals;
      console.log(stateRed)
  //     useEffect(() => {
  //       ref.current = value;
  //     });
  //  console.log('ref',ref.current);
   // }

    // this.setState((prevState) => ({
    //   meals: [...prevState.meals, { meal: "", calories: "" }],
    // }));
  }

  // const handleSubmit =(e) =>{
  //   e.preventDefault();
  // }

 const handleChange = (e) => {
  console.log('handle', e.target.name)
  const nameArr = ["meals", "calorie"]
  console.log('meals-1', meals)
    if (nameArr.includes(e.target.name)) {
      console.log('meals', meals)
      // let meals = [...meals];
      setMeals([...meals])
      console.log('meals2', meals)
      console.log('meals3', meals[e.target.dataset.id][e.target.className])
      meals[e.target.dataset.id][e.target.className] = e.target.value;
      setMeals(meals)
    } else if(e.target.name === 'trip' ) {
     setTrip( e.target.value );
     console.log('trip', trip)
    } else if(e.target.name === 'day') {
      setDay(e.target.value)
      console.log('day', day)
    }
    // console.log(e.target.value)
    // setTrip(e.target.value )
    // setDay( e.target.value )

  }

  const handleMealSumbit=()=>{
    console.log('mealsub', meals)
    var output = []
    meals.map((number)=>{
      output.push(Number(number.calorie))

    })

let sum = 0;
for(let i = 0; i < output.length; i++){
  sum+=output[i]
}
console.log('SUM', sum)
setTotalcal(sum)
return sum
// setTotalcal(sum)
  //   console.log('out', output)
  //  var sum = output.reduce((a, b) => a + b, 0)



// useEffect(()=> {
//   setTotalcal(sum)
// }, [sum])
//   //  , ()=> {
//   console.log('tot', totalCal)


  }
// useEffect(()=> {

// })
  // componentDidUpdate(){
  //   if(this.state.totalCal >= 3000){
  //     return(
  //      <SaveMeal/>
  //     )
  //   }

  // }



  // render() {
    // let calMet = toggle
    // //let button = 0
    // if(calMet) {
    //   console.log('CALMET')
    //  let button =
    // }

     console.log('meals', meals)
    return (


      <div className='dailyfoodcomp'>

        <div>
          <h2>Daily Food</h2>
          <h3>Total Calories / Day - {totalCal}</h3>
          {toggle ? (<div><SaveMeal trip={trip} days={day} meals={meals}/></div>) : ''}
        </div>
        <div>
          {/* <form className= 'mealForm' onSubmit={this.handleSubmit}> */}
            <label>
              <input placeholder='Trip Name' type="text" onChange={handleChange} name="trip" />
              <br/><br/>
              <input placeholder='Day' type="text" onChange={handleChange} name="day" />
            </label>
            {/* <input type="submit" value="Submit" /> */}
            <br/><br/>

            <button className='addmealbutton' onClick={handleMeal}>Add New Meal</button>
            <br/>

            {meals.map((val, index) => {
              let mealId = `meal-${index}`,
                calId = `cal-${index}`;
              return (
                <div key={index}>
                  <br/>
                  <label htmlFor={mealId}></label>
                  <input
                    type="text"
                    placeholder={`Meal #${index + 1}`}
                    onChange={handleChange}
                    name={"meals"}
                    data-id={index}
                    //  id={mealId}
                    className="meals"
                  />
                    <br/>
                    <br></br>
                  <label htmlFor={calId}></label>
                  <input
                    type="text"
                    placeholder='Calories'
                    onChange={handleChange}
                    name={"calorie"}
                    data-id={index}
                    //  id={calId}
                    className="calorie"
                  />
                    <br/>
                </div>

              );
              <br/>
            })}
            <br/>
            <input className='submitmealbutton' type="submit" onClick={handleMealSumbit}  value="Submit" />
          {/* </form> */}
        </div>

      </div>

    );
  }

  // function usePrevious(value) {
  //   // The ref object is a generic container whose current property is mutable ...
  //   // ... and can hold any value, similar to an instance property on a class
  //   const ref = useRef();
  //   // Store current value in ref
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]); // Only re-run if value changes
  //   // Return previous value (happens before update in useEffect above)
  //   return ref.current;
  // }


// import React, { useState } from "react";
// // import AddMeal from "./AddMeal.jsx";
// import SaveMeal from "./SaveMeal.jsx"


// class DailyFood extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle: false,
//       totalCal: 0,
//       trip: '',
//       day: '',
//       meals: [{ meal: "", calories: "" }]
//     };

//   }

//   handleMeal =(e)=> {

//     this.setState((prevState) => ({

//       meals: [...prevState.meals, { meal: "", calories: "" }],
//     }));
//   }

//   handleSubmit =(e) =>{
//     e.preventDefault();
//   }

//   handleChange = (e) => {
//     if (["meal", "calories"].includes(e.target.name)) {
//       console.log([...this.state.meals])
//       let meals = [...this.state.meals];
//       meals[e.target.dataset.id][e.target.className] = e.target.value;
//       this.setState({ meals });
//     } else {
//       console.log('inner', [e.target.name])
//       this.setState({ [e.target.name]: e.target.value });
//     }
//     // console.log('outer',[e.target.name])
//     // this.setState({[e.target.name]: e.target.value })
//     // this.setState({[e.target.name]: e.target.value })

//   }

//   handleMealSumbit=()=>{
//     var output = []
//     this.state.meals.map((number)=>{
//       output.push(Number(number.calories))

//     })
//    var sum = output.reduce((a, b) => a + b, 0)
//    this.setState({
//         totalCal: sum
//       }, ()=> {
//         if(this.state.totalCal >= 3000){
//           this.setState({
//             toggle: true
//           })
//         }
//       })



//   }

//   componentDidUpdate(){
//     if(this.state.totalCal >= 3000){
//       return(
//        <SaveMeal/>
//       )
//     }

//   }



//   render() {
//     let { meals } = this.state;
//       let calMet = this.state.toggle
//      let button
//      if(calMet) {
//        button = <SaveMeal meals={this.state}/>
//      }

//     return (


//       <div className='dailyfoodcomp'>

//         <div>
//           <h2>Daily Food</h2>
//           <h3>Total Calories / Day - {this.state.totalCal}</h3>
//           {button}
//         </div>
//         <div>
//           {/* <form className= 'mealForm' onSubmit={this.handleSubmit}> */}
//             <label>
//               <input placeholder='Trip Name' type="text" onChange={this.handleChange} name="trip" />
//               <br/><br/>
//               <input placeholder='Day' type="text" onChange={this.handleChange} name="day" />
//             </label>
//             {/* <input type="submit" value="Submit" /> */}
//             <br/><br/>

//             <button className='addmealbutton' onClick={this.handleMeal}>Add New Meal</button>
//             <br/>

//             {meals.map((val, index) => {
//               let mealId = `meal-${index}`,
//                 calId = `cal-${index}`;
//               return (
//                 <div key={index}>
//                   <br/>
//                   <label htmlFor={mealId}></label>
//                   <input
//                     type="text"
//                     placeholder={`Meal #${index + 1}`}
//                     onChange={this.handleChange}
//                     name={"meal"}
//                     data-id={index}
//                     //  id={mealId}
//                     className="meal"
//                   />
//                     <br/>
//                     <br></br>
//                   <label htmlFor={calId}></label>
//                   <input
//                     type="text"
//                     placeholder='Calories'
//                     onChange={this.handleChange}
//                     name={"calories"}
//                     data-id={index}
//                     //  id={calId}
//                     className="calories"
//                   />
//                     <br/>
//                 </div>

//               );
//               <br/>
//             })}
//             <br/>
//             <input className='submitmealbutton' type="submit" onClick={this.handleMealSumbit}  value="Submit" />
//           {/* </form> */}
//         </div>

//       </div>

//     );
//   }
// }

// export default DailyFood;
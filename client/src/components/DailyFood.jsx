import React from "react";
// import AddMeal from "./AddMeal.jsx";
import SaveMeal from "./SaveMeal.jsx"


class DailyFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      totalCal: 0,
      trip: '',
      meals: [{ meal: "", calories: "" }]
    };
    this.handleMeal = this.handleMeal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMealSumbit = this.handleMealSumbit.bind(this)
  }

  handleMeal(e) {
    this.setState((prevState) => ({
      meals: [...prevState.meals, { meal: "", calories: "" }],
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    if (["meal", "calories"].includes(e.target.name)) {
      let meals = [...this.state.meals];
      meals[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ meals });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    this.setState({[e.target.name]: e.target.value })

  }

  handleMealSumbit(){
    var output = []
    this.state.meals.map((number)=>{
      output.push(Number(number.calories))

    })
   var sum = output.reduce((a, b) => a + b, 0)
   this.setState({
        totalCal: sum
      }, ()=> {
        if(this.state.totalCal >= 3000){
          this.setState({
            toggle: true
          })
        }
      })



  }

  componentDidUpdate(){
    if(this.state.totalCal >= 3000){
      return(
       <SaveMeal/>
      )
    }

  }



  render() {
    let { meals } = this.state;
      let calMet = this.state.toggle
     let button
     if(calMet) {
       button = <SaveMeal meals={this.state}/>
     }

    return (
      <div className='dailyfoodcomp' id ='container'>
        <div>
          <h2>Daily Food</h2>
          <h3>Total Calories / Day - {this.state.totalCal}</h3>
          {button}
        </div>
        <div>
          {/* <form className= 'mealForm' onSubmit={this.handleSubmit}> */}
            <label>
              <input placeholder='Trip Name' type="text" onChange={this.handleChange} name="trip" />
            </label>
            {/* <input type="submit" value="Submit" /> */}
            <br/><br/>

            <button className='addmealbutton' onClick={this.handleMeal}>Add New Meal</button>
            <br/><br/>

            {meals.map((val, index) => {
              let mealId = `meal-${index}`,
                calId = `cal-${index}`;
              return (
                <div key={index}>
                  <label htmlFor={mealId}></label>
                  <input
                    type="text"
                    placeholder={`Meal #${index + 1}`}
                    onChange={this.handleChange}
                    name={"meal"}
                    data-id={index}
                    //  id={mealId}
                    className="meal"
                  />
                    <br/>
                    <br></br>
                  <label htmlFor={calId}></label>
                  <input
                    type="text"
                    placeholder='Calories'
                    onChange={this.handleChange}
                    name={"calories"}
                    data-id={index}
                    //  id={calId}
                    className="calories"
                  />
                </div>
              );
            })}
            <br/>
            <input className='submitmealbutton' type="submit" onClick={this.handleMealSumbit}  value="Submit" />
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default DailyFood;
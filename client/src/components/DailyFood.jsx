import React from "react";
import AddMeal from "./AddMeal.jsx";

class DailyFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCal: 0,
      meals: [{ meal: "", calories: "" }],
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
    if (["meal", "caloires"].includes(e.target.name)) {
      let meals = [...this.state.meals];
      meals[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ meals });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleMealSumbit(){
    this.state.meals((number)=>{
      console.log(number)
    })
  }



  render() {
    let { meals } = this.state;

    return (
      <div>
        <div>
          <h2>Daily Food</h2>
          <h3>Total Calories / Day {this.state.totalCal}</h3>
        </div>
        <div>
          <form className= 'mealForm' onSubmit={this.handleSubmit}>
            <label>
              Trip Name
              <input type="text" name="Meal" />
            </label>
            <input type="submit" value="Submit" />
            <br/><br/>

            <button onClick={this.handleMeal}>Add new Meal</button>
            <br/><br/>

            {meals.map((val, index) => {
              let mealId = `meal-${index}`,
                calId = `cal-${index}`;
              return (
                <div key={index}>
                  <label htmlFor={mealId}>{`Meal #${index + 1}`}</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name={"meal"}
                    data-id={index}
                    //  id={mealId}
                    className="meal"
                  />

                  <label htmlFor={calId}>Calories</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name={"caloires"}
                    data-id={index}
                    //  id={calId}
                    className="calories"
                  />
                </div>
              );
            })}
            <input type="submit" onClick={this.handleMealSumbit}  value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default DailyFood;
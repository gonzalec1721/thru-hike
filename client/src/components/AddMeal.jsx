import React from 'react';

class AddMeal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }



  render() {
    return (

<div>
<form>

      <label>
          Meal:
          <input type="text" onChange={this.handleChange} name="Meal" />
        </label>
        <label>
          Calories:
          <input type="text" onChange={this.handleChange} name="cal" />
        </label>
        <input type="submit" onClick={this.handlePost} value="Submit" />
     </form>

     <button onClick={this.handleMeal}>Add Meal</button>
     {this.state.children.map(child => child)}
     </div>
    )

  }
}



export default AddMeal;
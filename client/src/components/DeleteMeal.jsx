import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteMeal extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(e) {
let send = this.props.tripInfo.id

console.log('del')
axios.delete('/meal', { params: { id: send } })
  .then((res) => {
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
  }
  render() {


console.log('delete', this.props)
    return (
      <div>
      <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}


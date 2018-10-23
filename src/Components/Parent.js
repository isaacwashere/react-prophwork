import React from 'react';
import Child from './Child'

const name = "parent"

class Parent extends React.Component {
  constructor() {
    super()
    this.getName = this.getName.bind(this)
    this.getChild = this.getChild.bind(this)
  }

  getName = () => {
    this.props.myName(name);
  }

  getChild = (args) => {
    this.props.myName(args)
  }

  render() {

    return(
      <div>
 
        <h1 onClick={this.getName}>This is the Parent's table</h1>
        <Child myName={this.getChild}/>
      </div>
    )
  }
}

export default Parent;
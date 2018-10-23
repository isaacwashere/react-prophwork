import React from 'react';

const child = "child"

class Child extends React.Component {
  constructor() {
    super()
    this.getName = this.getName.bind(this)
  }

  getName = () => {
    this.props.myName(child);
  }

  render(){

    return(
      <div>
        <h2 onClick={this.getName}>This is the Children's room</h2>
      </div>
    )

  }
}
export default Child;
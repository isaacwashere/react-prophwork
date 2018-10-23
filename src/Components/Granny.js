import React from 'react';
import Parent from '../Components/Parent';


class Granny extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this.myName = this.myName.bind(this)
    this.getGranny = this.getGranny.bind(this)

  }

  getGranny = () => {
    let name = "granny"
    this.setState({name: name})
  }
  myName = (args) => {

    this.setState({name: args})

  }
  
  render(){

    return(
      <div>
        <h1>This is the {this.state.name}</h1>
        <h1 onClick={this.getGranny}>This is granny's house</h1>
        <Parent myName={this.myName}>
        </Parent>
      </div>
    )
  }
}
export default Granny;

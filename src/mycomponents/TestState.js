import React from "react";

class TestState extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "test",
    };
  }

  changeMsg(a) {
      a===1?console.log("das"):console.log("asdasd")
      
    if (a === 1) {
      this.setState({ message: "Button 1 pressed", time: 21 ,login:true});
    } else {
      this.setState({ message: "Button 2 pressed" ,time:24,login:false});
    }
  }
  render() {
    return (
        
      <div className="App">
        <button onClick={this.changeMsg.bind(this, 1)} style={{width:"100px" , margin: "40px"}}>button 1</button>
        <button onClick={this.changeMsg.bind(this, 2)}>button 2</button>
        <h1>
          {this.state.message} {this.state.time}
        </h1>
      </div>
    );
  }
}
export default TestState;

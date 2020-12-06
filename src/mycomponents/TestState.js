import React from "react";

class TestState extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "test",
    };
  }

  changeMsg(a) {
    if (a == 1) {
      this.setState({ message: "Button 1 pressed" });
    } else {
      this.setState({ message: "Button 2 pressed" });
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.changeMsg.bind(this, 1)}>button 1</button>
        <button onClick={this.changeMsg.bind(this, 2)}>button 2</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default TestState;

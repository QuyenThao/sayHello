import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.inputElement = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  sayHello(event) {
    alert(`Hello ${this.state.value}. Nice to see you!`);
    event.preventDefault();
  }

  reset(event) {
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Enter Your Name"
          ref={this.inputElement}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.sayHello}>Say Hello</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;

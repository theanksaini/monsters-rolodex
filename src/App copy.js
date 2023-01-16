import { Component } from "react";
// class Component which react has given us
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Local state is information is only available for this component to read and work on.
  // Whenever app is built, run the constructor method first.
  constructor() {
    super();

    this.state = {
      name: { firstName: "Ankit", lastName: "Saini" },
      company: "Alpha",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName}
            {this.state.name.lastName} welcome to {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: { firstName: "Ankush", lastName: "Saini" } };
                },
                //Follow up callback function
                () => {
                  console.log(this.state);
                }
              );

              // this.setState({ name: { firstName: "Ankush" } });
              // Changes state to a different object in memory
            }}
          >
            Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
// class Component which react has given us
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Local state is information is only available for this component to read and work on.
  // Whenever app is built, constructor method runs first.
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }
  //React's lifecycle methods, it will run whenever the component mounts i.e first time rendering is done.
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      )
    );
  }
  //Making this method is part of optimization.Not to re intilize the annyonmous function again and again.
  onSearchChange = (event) => {
    // console.log(event.target.value);
    // console.log({ startingArray: this.state.monsters }); Array state at end is not the whole list
    const searchField = event.target.value.toLocaleLowerCase();
    // this above gives us the string which is typed in the search bar

    this.setState(() => {
      return { searchField };
    });
  };

  // Program flow> First constructor then render this component this mount, then state is updated and again re renders.
  //array.map() Lets us create new array based on our existing array.
  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    //Method to filter the monsters as per the user search
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      //Includes is case sensitive and .filter gives us new array
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

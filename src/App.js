import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/cards.component/card-list";
import SearchBox from "./components/searchBox/searchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://api.npoint.io/7a132490453b8bfdcc9f")
      .then((response) => response.json())
      .then((users) => this.setState({ cards: users }));
  }

  render() {
    const { cards, search } = this.state;
    const filterCards = cards.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <Header />
        <SearchBox
          placeholder="search after title my dear"
          changeEvent={(e) => this.setState({ search: e.target.value })}
        />

        <Cards cards={filterCards} />
      </div>
    );
  }
}

export default App;

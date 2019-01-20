import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import url from '../util/urls/url'
import Results from '../components/Results/Results'
import SearchBar from '../components/Search/SearchBar'
// import _ from 'lodash'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLocal = this.handleLocal.bind(this);


    this.state = {
      data: [],
      favouritesArray: [],
      keyword: '',
      searched: false,
      // htmlString: null,
    }
  }

  // accessing api and local storage for favs

  componentDidMount() {
    fetch(url.torontoWaste)
      .then(resp => resp.json())
      .then(waste => {
        // const htmlString = _.unescape(data[0].body)
        this.setState({
          data: waste,
          // also get items from favourites
          favouritesArray: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites'))
            : []
        })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate() {
    const { keyword, searched } = this.state;

    if ((keyword.length === 0) & searched) {
      this.setState({
        searched: false
      });
    }
  }


  // tracks input for search bar

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // changes state in searched - when searched

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searched: true
    });
  }

  // listenser for enter key

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  };

  // changes to local storage

  handleLocal = (item) => {
    let favouritesArray = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];
    if (favouritesArray.includes(item)) {
      const index = favouritesArray.indexOf(item);
      favouritesArray.splice(index, 1);
      localStorage.setItem('favourites', JSON.stringify(favouritesArray));
    } else {
      favouritesArray.push(item);
      localStorage.setItem('favourites', JSON.stringify(favouritesArray));
    }
    this.setState({
      favouritesArray
    });
  };




  render() {

    const { data, keyword, searched, favouritesArray } = this.state;

    const filtered = data.filter(items =>
      items.keywords.toLowerCase().includes(keyword && keyword.toLowerCase())
    );

    const favouriteItems = data.filter(items => favouritesArray.includes(items.title));


    return (
      <div className="App" handleEnter={(e) => this.handleEnter(e)}>
        <Header />
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
        {keyword.length > 0
          ? searched && (
            <Results data={filtered} handleLocal={this.handleLocal} favouritesArray={favouritesArray} />
          ) : null}
        {favouriteItems.length > 1 && (
          <Content isFavourite>
            <h2>Favourites</h2>
            <Results data={favouriteItems} handleLocal={this.handleLocal} favouritesArray={favouritesArray} />
            <ul></ul>
          </Content>
        )}
      </div>
    );
  }
}

const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  background-color: rgba(0, 148, 89, 0.03);
  button {
    svg {
      fill: rgb(0, 148, 89);
    }
  }
    h2 {
      padding-left: 1rem;
      color: rgb(0, 148, 89);
    }
  
`;


export default App;

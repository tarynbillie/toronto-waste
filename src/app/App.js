import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header';
import url from '../util/urls/url';
import Results from '../components/Results/Results'
// import _ from 'lodash';
import './App.css';
import Favourites from '../components/Results/Favourites';
import SearchBar from '../components/Search/SearchBar';


class App extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyEnter = this.handleKeyEnter.bind(this);



    this.state = {
      data: [],
      keyword: '',
      searched: false,
      favourites: [],
      // htmlString: null,
    }
  }

  // accessing api and local storage for favs

  componentDidMount() {
    fetch(url.torontoWaste)
      .then(resp => resp.json())
      .then(waste => {
        // const htmlString = _.unescape(data[0].body)
        // const title = data[0].title
        // console.log(htmlString)
        // console.log(title)
        this.setState({ 
          data: waste, 
          // also get items from favourites
          favorites: localStorage.getItem('favorites')
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

  handleKeyEnter = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  };


  favourite = (e) => {
    this.setState({
      isFavourite: true
    });
  };


  render() {

    const { data, keyword, searched } = this.state;


    for (var i = 0; i < data.length; i++) {
      console.log(data[i].keywords)
      if (data[i].keywords === 'salad') {

      }
    }

   


    return (
      <div className="App" handleKeyEnter={(e) => this.handleKeyEnter(e)}>
        <Header />
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <Results data={data} handleChange={this.handleChange} searched={this.state.searched} />
        <Content className='favourites'>
          <h2>Favourites</h2>
        </Content>
      </div>
    );
  }
}

const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
    &.favourites {
      background-color: rgba(0, 148, 89, 0.1);
    }
    h2 {
      color: rgb(0, 148, 89);
    }
`;


export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/SearchBar';
import _ from 'lodash';
import './App.css';

const baseUrl = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      htmlString: null,
    }
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(data => {
      const htmlString = _.unescape(data[0].body)
      console.log(htmlString)
      this.setState({htmlString})
    })
    .catch(error => console.log(error))
  }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        {this.state.htmlString &&
          <div dangerouslySetInnerHTML={{__html: this.state.htmlString }} >
          </div>
        }
      </div>
    );
  }
}

export default App;

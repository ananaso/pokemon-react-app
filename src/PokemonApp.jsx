import React from 'react';
import PokeSearch from './PokeSearch';
import PokeDisplay from './PokeDisplay';
import PokemonLogo from './International_Pokemon_logo.svg';


// fetch = require('node-fetch')
// fs = require('fs');
// await = require('await');
// async = require('async');

class PokemonApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPokeInfo: undefined,
      pokeDisplay: [],
      hidden: true,
    }
  }

  async _pokeFetch(pokeName) {

    // const response = await fetch('http://localhost:8082/api/people')
    // const json = await response.json()
    // this.setState({people: json})

    let pokeInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    let pokeReturn = {
      isValid: pokeInfo.ok,
      info: undefined,
    };
    if (pokeInfo.ok) {
      let pokeJSON = await pokeInfo.json();
      pokeReturn.info = pokeJSON;
    }
    return pokeReturn;
  }

  handlePokemonSearch = (event) => {
    event.preventDefault();
    let textbox = document.getElementById('pokemon-searchbox');
    let pokemonName = textbox.value;
    this._pokeFetch(pokemonName).then(result => {
      this.setState({pokeDisplay: [result.info], hidden: false})
      textbox.value = '';
    });
  }

  handleViewAll = (event) => {
    event.preventDefault();
    this.setState({pokeDisplay: []}); // clear the display before concat'ing all the pokemon again
    for(let offset = 0; offset < 1050; offset+=10) {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        .then(response => response.json())  // parse http response to json
        .then(response => response.results.map(pokemon => {
          return this._pokeFetch(pokemon.name); // get just the pokemon names
        }))
        .then(pokeInfo => {
          Promise.all(pokeInfo).then(pokeArray => { // resolve every promise returned by iterating with _pokeFetch
            return pokeArray.map(pokemon => pokemon.info) // get just the pokemon info objects
          }).then(pokemon => this.setState({pokeDisplay: this.state.pokeDisplay.concat(pokemon), hidden: false})); // concat the batch of pokemon onto the display
        });
    }
  }

  render() {
    return (
      <div>
        <img src={PokemonLogo} alt={"Pokemon Logo"}/>
        <PokeSearch onSubmit={(e) => this.handlePokemonSearch(e)}/>
        <br /><button onClick={(e) => this.handleViewAll(e)}>View All</button>
        <div hidden={this.state.hidden}>
          <PokeDisplay pokeArray={this.state.pokeDisplay}/>
        </div>
      </div>
    );
  }
}

export default PokemonApp;
import React from 'react';
import PokeCard from './PokeCard';
import PokeSearch from './PokeSearch'
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
      this.setState({pokeDisplay: [result.info]})
      textbox.value = '';
    });
  }

  render() {
    return (
      <div>
        <img src={PokemonLogo} alt={"Pokemon Logo"}/>
        <PokeSearch onSubmit={(e) => this.handlePokemonSearch(e)}/>
        <br />
        <button>Search</button><button>View All</button>
        <div id="pokeDisplayContent">
            
        </div>
      </div>
    );
  }
}

export default PokemonApp;
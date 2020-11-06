import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import PokemonLogo from './International_Pokemon_logo.svg'

// fetch = require('node-fetch')
// fs = require('fs');
// await = require('await');
// async = require('async');

class PokemonApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      curPokeInfo: undefined,
    }
  }

  async _pokeFetch(pokeName) {

    // const response = await fetch('http://localhost:8082/api/people')
    // const json = await response.json()
    // this.setState({people: json})


    let pokeInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    if (pokeInfo.ok) {
      let pokeJSON = await pokeInfo.json();
      this.setState({curPokeInfo: pokeJSON});
    }
    return pokeInfo.ok;
  }

  handlePokemonSearch = (event) => {
    event.preventDefault();
    let textbox = document.getElementById('pokemon-searchbox');
    let pokemonName = textbox.value;
    this._pokeFetch(pokemonName).then((isValid) => {
      let pokeImg = document.getElementById('pokemon-image');
      if (isValid) {
        pokeImg.src = this.state.curPokeInfo.sprites.other["official-artwork"].front_default;
        pokeImg.alt = this.state.curPokeInfo.species.name;
      } else {
        pokeImg.src = PokemonLogo;
        pokeImg.alt = 'Pokemon Logo';
        this.setState({curPokeInfo: undefined})
      };
      textbox.value = '';
  });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handlePokemonSearch(e)}>
          <input type="text" id="pokemon-searchbox"/>
        </form>
        <img id="pokemon-image" src={PokemonLogo} alt="Pokemon Logo"/>
      </div>
    );
  }
}

export default PokemonApp;
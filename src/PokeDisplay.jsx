import PokeCard from './PokeCard';

const PokeDisplay = ({pokeArray}) => {
  const _generatePokeCards = () => {
    return (
      pokeArray.map(pokemon => {
        return (
          <div key={`${pokemon.name}-viewAllCard`} className="viewAllPokeCard">
            <hr/>
            <PokeCard pokeInfo={pokemon}/>
          </div>
        );
      })
    );
  }
  
  return (
    <div className="pokeCardList" id="pokeDisplay">
      {pokeArray[0] ? _generatePokeCards() : <h3>Pokemon not found!</h3>}
    </div>
  );
}

export default PokeDisplay;
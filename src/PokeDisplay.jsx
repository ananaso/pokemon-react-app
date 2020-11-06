import PokeCard from './PokeCard';

const PokeDisplay = ({pokeArray}) => {
  const _generatePokeCards = () => {
    return (
      pokeArray.map(pokemon => {
        return (
          <div className="pokeCard">
            <hr/>
            <PokeCard pokeInfo={pokemon}/>
          </div>
        );
      })
    );
  }
  
  return (
    <div className="pokeCardList">
      {pokeArray[0] ? _generatePokeCards() : <h3>Pokemon not found!</h3>}
    </div>
  );
}

export default PokeDisplay;
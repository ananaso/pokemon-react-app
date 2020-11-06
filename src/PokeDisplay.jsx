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
      {_generatePokeCards()}
    </div>
  );
}

export default PokeCard;
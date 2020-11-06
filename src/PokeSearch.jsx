const PokeSearch = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="pokemon-searchbox"/>
    </form>
    // <PokeCard pokeInfo={this.state.curPokeInfo}/>
  );
}

export default PokeSearch;
      
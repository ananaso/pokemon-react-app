const PokeSearch = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="pokemon-searchbox"/>
      <button type="submit">Search</button>
    </form>
  );
}

export default PokeSearch;
      
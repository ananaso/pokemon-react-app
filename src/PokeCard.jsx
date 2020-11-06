const PokeCard = ({pokeInfo}) => {
  let name = pokeInfo.species.name;
  let officialArt = pokeInfo.sprites.other['official-artwork'].front_default;
  let stats = pokeInfo.stats;

  const _generateStatList = () => {
    return (
      stats.map(stat => {
        return (<li>{`${stat.stat.name} = ${stat.base_stat}`}</li>);
      })
    );
  }
  
  return (
    <div id="pokeCard">
      <img src={officialArt} alt={name}/>
      <p>{name}</p>
      <ul>{_generateStatList()}</ul>
    </div>
  );
}

export default PokeCard;
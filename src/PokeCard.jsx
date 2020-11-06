const PokeCard = ({pokeInfo}) => {
  let name = pokeInfo.name;
  let officialArt = pokeInfo.sprites.other['official-artwork'].front_default;
  let stats = pokeInfo.stats;

  const _generateStatList = () => {
    return (
      stats.map(stat => {
        return (<li key={`${name}-${stat.stat.name}`}>{`${stat.stat.name} = ${stat.base_stat}`}</li>);
      })
    );
  }
  
  return (
    <div id={`${name}-pokeCard`}>
      <img id={`${name}-image`} src={officialArt} alt={`No Official Artwork for ${name}`}/>
      <p id={`${name}-title`}>{name}</p>
      <ul id={`${name}-statList`}>{_generateStatList()}</ul>
    </div>
  );
}

export default PokeCard;
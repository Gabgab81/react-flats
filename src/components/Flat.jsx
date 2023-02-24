import './Flat.scss';

function Flat({ link, price, descript, lat, lng, selectFlat }) {
  const handleClick = () => {
    return selectFlat(descript, lat, lng);
  }
  console.log('flat')
  return (
    <div className="card" style={ { backgroundImage: `url(${link})` } }
    onClick={handleClick}>
      <div className='card-category'>
        {price}
      </div>
      <div className='card-description'>
        {descript}
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
}

export default Flat;
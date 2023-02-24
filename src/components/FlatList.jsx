// import React from 'react';
import Flat from './Flat';

function FlatList({ list, selectFlat }) {
  const renderList = () => {
    return list.map(({ name, price, imageUrl, lat, lng }) => {
      return (
        <Flat 
          price={price} 
          descript={name}
          key={name} 
          link={imageUrl} 
          lat={lat}
          lng={lng}
          selectFlat={ selectFlat }
        />
      );
    });
  }
  return (
    <div className='flat-list'>
      {renderList()}
    </div>
  );
}

export default FlatList;
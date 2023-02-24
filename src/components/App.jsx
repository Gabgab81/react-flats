import React from 'react';
import './App.scss';
import FlatList from './FlatList';
import flatsJs from '../data/flats';
import SimpleMap from './SimpleMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatsJs,
      selectedFlatDescript: "",
      selectedFlatLat: null,
      selectedFlatLng: null
    };
  };

  changeFlat = (descript, lat, lng) => {
    this.setState({
      selectedFlatDescript: descript,
      selectedFlatLat: lat,
      selectedFlatLng: lng
    });
    // console.log(selectedFlatDescript)
    console.log(descript)
    console.log(this.state.selectedFlatDescript)
  };
 
  render() {
    // console.log(this.selectedFlatLat)
    return (
      <div className="App">
        <FlatList list={this.state.flatsJs} selectFlat={this.changeFlat} />
        <SimpleMap 
        name={ this.state.selectedFlatDescript }
        lat={ this.state.selectedFlatLat }
        lng={ this.state.selectedFlatLng }
        />
      </div>
    );
  };
  
}

export default App;

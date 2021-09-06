import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './card.js';


function App() {

  const [fruitViceData, setfruitViceData] = useState();
  // const [gallery_data, setGallery_data] = useState('no data');
  // const [fruitNames, setFruitNames] = useState('no data');


  let getData = async () => {
    // console.log('comeHere')
    await fetch('https://www.fruityvice.com/api/fruit/all', { mode: 'cors' })
      .then(res => {
        return res.json()
      }).then((res) => {
        // console.log('then', res)
        setfruitViceData(res);
      })
      .catch(err => console.log('err', err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {fruitViceData && fruitViceData.map(fruit => {
        return (
          <div>
            <Card fruit={fruit} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
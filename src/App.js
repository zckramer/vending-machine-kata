import Header from './components/Header';
import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const Quarter = ({
  weight: 10,
  size: .5
})

const Dime = ({
  weight: 2,
  size: .2
})

const Nickel = ({
  weight: 5,
  size: .4
})

const acceptableCoins = ({
    quarter: {
      weight: 10,
      size: .5,
      value: .25
    },
    dime: {
      weight: 2,
      size: .2,
      value: .1
    },
    nickel: {
      weight: 5,
      size: .4,
      value: .05
    },
    penny: {
      weight: 1,
      size: .2,
      value: .01
    }
})



function App() {
  const [acceptedCoins, setAcceptedCoins] = useState([])
  
  function insertCoin (coinObject) {
    const coinWeight = coinObject.weight;
    const coinSize = coinObject.size;
    // console.log("coin to determine: ", coinObject)
    // console.log("acceptable parameters: size=",acceptableCoins.quarter.size, " weight=", acceptableCoins.quarter.weight)
    if(coinSize === acceptableCoins.quarter.size && coinWeight === acceptableCoins.quarter.weight) {
      console.log("inserted coin size = ", coinSize);
      console.log("inserted coin weight = ", coinWeight);
      console.log("this is a quarter");
      setAcceptedCoins([coinObject])
    }
  }
  return (
    <div className="App" style={styles.app}>
      <Header vendingdata={acceptedCoins}/>
      <button onClick={()=>insertCoin(Quarter)}>Insert Coin</button>
    </div>
  );
}

export default App;

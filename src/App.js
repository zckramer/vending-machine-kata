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
const Penny = ({
  weight: 1,
  size: .3
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
    }
})



function App() {
  const [acceptedCoins, setAcceptedCoins] = useState([]);
  const [coinsValue, setCoinsValue] = useState();

  function insertCoin (coinObject) {
    const coinWeight = coinObject.weight;
    const coinSize = coinObject.size;
    // console.log("coin to determine: ", coinObject)
    // console.log("acceptable parameters: size=",acceptableCoins.quarter.size, " weight=", acceptableCoins.quarter.weight)
    if(coinSize === acceptableCoins.quarter.size && coinWeight === acceptableCoins.quarter.weight) {
      console.log("inserted coin size = ", coinSize);
      console.log("inserted coin weight = ", coinWeight);
      console.log("quarter accepted");
      setAcceptedCoins( [...acceptedCoins, coinObject] );
      console.log(acceptedCoins);
    }
    if(coinSize === acceptableCoins.dime.size && coinWeight === acceptableCoins.dime.weight) {
      console.log("inserted coin size = ", coinSize);
      console.log("inserted coin weight = ", coinWeight);
      console.log("dime accepted");
      setAcceptedCoins([].push(coinObject));
      console.log(acceptedCoins);
    }
    if(coinSize === acceptableCoins.nickel.size && coinWeight === acceptableCoins.nickel.weight) {
      console.log("inserted coin size = ", coinSize);
      console.log("inserted coin weight = ", coinWeight);
      console.log("dime accepted");
      setAcceptedCoins([].push(coinObject));
      console.log(acceptedCoins);
    }
  }

  return (
    <div className="App" style={styles.app}>
      <Header vendingdata={acceptedCoins}/>
      <div className="InsertCoinPanel">
        <button onClick={()=>insertCoin(Quarter)}>Insert Quarter</button>
        <button onClick={()=>insertCoin(Dime)}>Insert Dime</button>
        <button onClick={()=>insertCoin(Nickel)}>Insert Nickel</button>
        <button onClick={()=>insertCoin(Penny)}>Insert Penny</button>
      </div>
    </div>
  );
}

export default App;

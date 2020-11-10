import React from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 50,
    }
})

const Header = (props) => {
    const totalsData = props;
    return (
        <div className="Header" style={styles.header}>
            {console.log(totalsData)}
            <div className="Header__Money">
    <div>Total Inserted: </div><p>{props.totalValue === 0 ? "Insert Coin" : props.totalValue}</p>
            </div>
        </div>
    )
}

export default Header;
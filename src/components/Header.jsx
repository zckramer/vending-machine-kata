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
                <div>Quarters: </div><p>{}</p>
                <div>Dimes: </div><p>{}</p>
                <div>Nickels: </div><p>{}</p>
                <div>Total Inserted: </div><p>total value</p>
            </div>
        </div>
    )
}

export default Header;
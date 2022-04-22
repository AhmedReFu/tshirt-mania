import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Brother/Sister/Sister';
import { RingContext } from '../Grandpa/Grandpa';
import MySelf from '../MySelf/MySelf';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
            <div style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Aunty;
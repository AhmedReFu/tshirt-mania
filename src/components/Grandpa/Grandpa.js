import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const [ornament, setOrnament] = useState('Diamond Ring');
    let gift = '';
    const handleGiftNatinBow = () => {
        gift = 'Platinum Ring';
        setOrnament(gift)
    }

    const handleByAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h3>Grandpa</h3>

                <p>House:{house} <button onClick={handleByAHouse}>By A house</button> <button onClick={handleGiftNatinBow}>Gift natin bow</button></p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament} ></Father>
                    <Uncle house={house} ornament={ornament}></Uncle>
                    <Aunty house={house} ornament={ornament}></Aunty>
                </div>
            </div >
        </RingContext.Provider>
    );
};

export default Grandpa;
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ house, ornament }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p><small>House: {house}</small></p>
            <p>Gift bY Grandpa: {ring}</p>
        </div>
    );
};

export default Special;
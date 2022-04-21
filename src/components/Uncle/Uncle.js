import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Brother/Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Uncle = ({ house }) => {
    return (
        <div>
            <h4>Uncle</h4>
            <p>House: {house}</p>
            <div style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Uncle;
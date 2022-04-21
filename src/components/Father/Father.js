import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Brother/Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;
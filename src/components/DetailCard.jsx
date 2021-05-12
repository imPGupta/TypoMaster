import React from 'react';
import '../style.css';

const DetailCard = ({ cardName, cardValue }) => {
    return (
        <div className='card-container'>
            <div className='card-name'>{cardName}</div>
            <div className='card-value'>{cardValue}</div>
        </div>
    );
};
export default DetailCard;

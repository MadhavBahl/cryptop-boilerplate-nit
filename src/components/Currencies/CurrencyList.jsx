import React from 'react';
import './Currency.css';

const CurrencyList = () => {
    return (
        <div className='currency-list-container'>
            <h1 className='currency-section-heading'>
                Today's top 10 currencies
            </h1>

            <div className='crypto-cards-container'></div>
        </div>
    );
};

export default CurrencyList;

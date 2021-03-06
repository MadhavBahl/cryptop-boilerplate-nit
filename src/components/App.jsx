import React, { useEffect, useState } from 'react';
import Conversion from './Conversion/Conversion';
import CurrencyList from './Currencies/CurrencyList';
import Landing from './Landing/Landing';
import './App.css';

const App = () => {
    return (
        <div className='app-container'>
            {/* Section 1: Landing */}

            {/* Section 2: Conversion */}

            {/* Section 3: Top currencies cards */}
            <CurrencyList />
        </div>
    );
};

export default App;

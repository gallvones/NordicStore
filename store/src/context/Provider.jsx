
import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

const Provider = ({ children }) => {
    
    const [cartMenu, setCartMenu] = useState(false); // cart closed
    const [itemsCart, setItemsCart] = useState([]); // cart vazio
    const toggleCart = () => {
        setCartMenu(!cartMenu); 
    };

    const value = {
        cartMenu,  
        toggleCart,  
        itemsCart,
        setItemsCart
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;

export default Provider;

import React, { useState,useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

const Provider = ({ children }) => {
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setItemsCart(JSON.parse(storedCart));
        }
      }, []);   
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
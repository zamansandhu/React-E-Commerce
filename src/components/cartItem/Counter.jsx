import React, { useState } from 'react';
import { useGlobalCart } from '../../contexts/cart-context';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Counter = ({ qty, id }) => {

    const { updateQuantity, deleteFromCart } = useGlobalCart()

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
            <p>quantity:</p>
            <RemoveCircleOutlineIcon style={{ cursor: 'pointer' }} onClick={() => qty <= 1 ? deleteFromCart(id) : updateQuantity('decrement', id)} />

            <p>{qty}</p>
            <ControlPointIcon style={{ cursor: 'pointer' }} onClick={() => updateQuantity('increment', id)} />

        </div>
    );
};

export default Counter;

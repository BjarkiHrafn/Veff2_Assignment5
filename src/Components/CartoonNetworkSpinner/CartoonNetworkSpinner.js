import React from 'react';
import PropTypes from 'prop-types';
import style from './CartoonNetworkSpinner'

const CartoonNetworkSpinner = ({interval}) => {

    return (
        <div>
            <div></div>
            <div></div>
        </div>
    );
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3
}

export default CartoonNetworkSpinner;

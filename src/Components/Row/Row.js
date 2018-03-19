import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';


const Row = ({children}) => {
    return (
        <div className={`${styles.Row}`}>{children}</div>
    )
}

Row.propTypes = {
    children: PropTypes.node
}

export default Row;

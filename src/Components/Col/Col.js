import React from 'react';
import PropTypes from 'prop-types';
import styles from './Col.css'

const Col = ({size, children}) => {
    return (
        <div style={{width: `${100/(12/size)}%`}} className={styles.Col}>{children}</div>
    )
}

Col.propTypes = {
    size: PropTypes.number,
    children: PropTypes.node
}

Col.defaultProps = {
    size: 1
}

export default Col;

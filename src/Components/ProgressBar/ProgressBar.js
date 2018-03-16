import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progressbar.css';

const ProgressBar = ({state, striped}) => {
    console.log('state', state);
    var stripes = '';
    if(striped) {
        stripes = 'striped'
    }

    return (
        <div className={`${styles.progressBar} ${styles[`progressBar-${state}`]} ${styles[`progressBar-stripes`]}`}></div>
    );
}

ProgressBar.propTypes = {
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    striped: PropTypes.bool
}

export default ProgressBar;

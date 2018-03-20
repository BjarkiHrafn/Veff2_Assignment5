import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';


const ProgressBar = ({progress, striped, animated, state}) => {

    var stripes = '';
    var animate = '';
    if(striped) {
        stripes = 'striped';
    }
    if(animated) {
        animate = 'animated';
    }

    // ${styles[`${animate}`]}
    // <div style={{width: `${progress}%` }} className={`${styles.filler} ${styles[`${stripes}`]} ${styles[`${state}`]} ${styles[`${animate}`]}`}></div>
    return (
        <div className={`${styles.progressBar}`}>
            <div style={{width: `${progress}%` }} className={`${styles.filler} ${styles[`${stripes}`]} ${styles[`${state}`]} ${styles[`${animate}`]}`}></div>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger'])
}

export default ProgressBar;

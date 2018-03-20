import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tab = ({selectionKey, title, theme, layout}) => {

    return(
        <button className = {`${styles[`${theme}`]} ${styles[`${layout}`]}`}>
            {title}
        </button>
    )

};

export default Tab;

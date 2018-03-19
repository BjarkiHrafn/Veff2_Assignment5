import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Tab selectionKey = {this.props.currentSelectedTab}/>
        )
    }
}

Tabs.propTypes = {
    theme: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired
}

export default Tabs;

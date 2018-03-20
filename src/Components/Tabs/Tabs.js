import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    
    }


    render() {
        const child = this.props.children;

        return(
            <div>
                {this.props.children.map((tab, index) =>
                    <span key = {index} className = {styles.tabContainer} onClick = {() => { this.props.onSelect(index); }}>
                        <Tab selectionKey = {this.props.currentSelectedTab} title = { this.props.children[index].props.title } theme = {this.props.theme} layout = {this.props.layout}/>
                    </span>
                )}

            </div>
        )
    }
}

Tabs.propTypes = {
    theme: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired,
}

Tabs.defaultProps = {
    theme: 'light',
    layout: 'horizontal',
}
export default Tabs;

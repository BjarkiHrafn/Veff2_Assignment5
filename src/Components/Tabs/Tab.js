import React from 'react';
import PropTypes from 'prop-types';

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                hello
            </div>
        )
    }

};

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
}

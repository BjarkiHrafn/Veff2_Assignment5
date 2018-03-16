import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Modal extends React.Component{

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }

};

Modal.Title = (props) => { return (<div className = "">{props.children}</div>) };
Modal.Body = (props) => { return (<div>{props.children}</div>) };
Modal.Footer = (props) => {
    if(props.isOpen) {
        return (
            <div>{props.children}</div>
        )
    } else {
        return(
            <div></div>
        )
    }
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;

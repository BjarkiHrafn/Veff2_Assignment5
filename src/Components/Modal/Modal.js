import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';


class Modal extends React.Component{


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {styles.modal}>
                <span className = {styles.close} onClick = {this.props.onClose}>&times;</span>
                <div className = {styles.modalContent}>{this.props.children}</div>
            </div>
        );
    }

};

Modal.Title = (props) => {
    return (
        <div>{props.children}</div>
    )
};

Modal.Body = (props) => {

    return (
        <div>{props.children}</div>
    )
};

Modal.Footer = (props) => {
    return(
        <div>{props.children}</div>
    )

};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;

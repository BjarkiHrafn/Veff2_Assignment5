import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';


class Modal extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            openModal: false
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.onClose;
    }

    render() {

        if(this.state.openModal) {
            return (
                <div className = {styles.modal}>
                    <span className = {styles.close} onClick = { () => { this.setState({ openModal: false }); this.props.onClose() ; } }>&times;</span>
                    <div className = {styles.modalContent}>{this.props.children}</div>
                </div>
            );
        } else {
            return(
                <button onClick = {() => { this.setState({ openModal: true }) }}>open zel modal</button>
            )
        }
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

Modal.defaultProps = {
    isOpen: false
}

export default Modal;

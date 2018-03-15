import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//const x = () => {return (<div>{children}</div>)}

class Modal extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props);
        // this.Title = React.createClass({
        //     constructor(props){}
        //     render() {
        //         return <div>{this.props.children}</div>
        //     }
        // })
        // this.Body = React.createClass({
        //     render() {
        //         return <div>{this.props.children}</div>
        //     }
        // })
        // this.Footer = React.createClass({
        //     render() {
        //         return <div>{this.props.children}</div>
        //     }
        // })
    }

    /*const Title = styled.h2`
        padding: 10px;
        font-size: 24px;
        color: 'blue';
    `;

    const Footer = styled.div`
        padding: 10px;
        font-size: 10px;
        color: 'yellow';
    `;

    const Body = styled.p`
        padding: 10px;
        font-size: 12px;
        color: 'black';
    `;

    Footer.defaultProps = {
        display: 'none'
    };*/
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }

};

Modal.Title = (props) => { return (<div>{props.children}</div>) };

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;

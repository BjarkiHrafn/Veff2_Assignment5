import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal/Modal';

//const{Title, Body, Footer} = Modal;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }


    render() {
        //<Modal.Body>My Modal Body</Modal.Body>
        //<Modal.Footer>My Modal Footer</Modal.Footer>
        return (
            <div>
                <h1>Modal</h1>
                <Modal
                    isOpen = {this.state.isOpen}
                    onClose = {() => this.setState({ isOpen: false })}>
                    <Modal.Title>My Modal Title</Modal.Title>
                </Modal>
            </div>
        );
    }

};

ReactDOM.render(<App />, document.getElementById('root'));

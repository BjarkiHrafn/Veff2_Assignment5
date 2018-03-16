import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Components/Modal/Modal';
import ButtonCM from './Button/ButtonCM';
//const{Title, Body, Footer} = Modal;

import Progressbar from './Components/Progressbar/Progressbar';


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
                <ButtonCM type='success'>herro</ButtonCM>
                <h1>Modal</h1>
                <Modal
                    isOpen = {this.state.isOpen}
                    onClose = {() => this.setState({ isOpen: false })}>
                    <Modal.Title>My Modal Title</Modal.Title>
                    <Modal.Body>My Modal Body</Modal.Body>
                    <Modal.Footer>My Modal Footer</Modal.Footer>
                </Modal>
                <Progressbar
                    progress='25'
                    state='info'
                    striped='true'
                    />
                <Progressbar
                    progress='50'
                    state='success'
                    striped='true'
                    />
                <Progressbar
                    progress='75'
                    state='warning'
                    striped='true'
                    />
                <Progressbar
                    progress='100'
                    state='danger'
                    striped='true'

                    />
            </div>
        );
    }

};

ReactDOM.render(<App />, document.getElementById('root'));

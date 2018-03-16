import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import Modal from './Components/Modal/Modal';

//const{Title, Body, Footer} = Modal;
import ModalStyle from './Components/Modal/Modal.css';


import Progressbar from './Components/Progressbar/Progressbar';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }

    closeModal() {
        this.setState({isOpen: false});
    }


    render() {
        //<Modal.Body>My Modal Body</Modal.Body>
        //<Modal.Footer>My Modal Footer</Modal.Footer>
        const ModalState = this.state.isOpen;
        return (
            <div>
                <h1>Modal</h1>
                <button onClick = {this.openModal}>open zel modal</button>
                {this.state.isOpen &&
                <Modal
                    isOpen = {this.state.isOpen}
                    onClose = {() => this.setState({ isOpen: false })}>
                    <Modal.Title>My Modal Title</Modal.Title>
                    <Modal.Body>My Modal Body</Modal.Body>
                    <Modal.Footer>My Modal Footer</Modal.Footer>
                </Modal>
                }
                <Progressbar
                    progress={25}
                    striped={false}
                    animated={true}
                    state='info'
                    />
                <Progressbar
                    progress={50}
                    striped={true}
                    animated={false}
                    state='success'
                    />
                <Progressbar
                    progress={75}
                    striped={true}
                    animated={true}
                    state='warning'
                    />
                <Progressbar
                    progress={100}
                    striped={true}
                    animated={true}
                    state='danger'
                    />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

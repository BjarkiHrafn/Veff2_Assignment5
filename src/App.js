import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import Modal from './Components/Modal/Modal';
import NameCard from './Components/NameCard/NameCard';
//const{Title, Body, Footer} = Modal;
import ModalStyle from './Components/Modal/Modal.css';
import ReactFileReader from 'react-file-reader';
import Carousel from './Components/Carousel/Carousel.js';


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

                <NameCard name="Arnar Leifsson" email="arnarl@ru.is" telephone="+357-777-7777" imageUrl="http://jpsierens.com/wp-content/uploads/2015/02/goku_by_maffo1989-d4vxux4.png"/>
                <Carousel
                    images = {['https://yt3.ggpht.com/-gqWw2ln-AFM/AAAAAAAAAAI/AAAAAAAAAAA/p6f_Yd_96Mk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
                        'http://www.clipartbest.com/cliparts/xig/LzL/xigLzLA6T.jpg'
                    ]}
                    size = 'medium'/>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

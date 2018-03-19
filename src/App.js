import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import Modal from './Components/Modal/Modal';
import NameCard from './Components/NameCard/NameCard';
//const{Title, Body, Footer} = Modal;
import ModalStyle from './Components/Modal/Modal.css';
import ReactFileReader from 'react-file-reader';
import Carousel from './Components/Carousel/Carousel.js';
import Row from './Components/Row/Row';
import Col from './Components/Col/Col';
import DatePicker from './Components/DatePicker/DatePicker';
import Tabs from './Components/Tabs/Tabs';
import Tab from './Components/Tabs/Tab';


import Progressbar from './Components/Progressbar/Progressbar';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            date: new Date(),
            tab: 0,

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
                    state='info'/>
                <Progressbar
                    progress={50}
                    striped={true}
                    animated={false}
                    state='success'/>
                <Progressbar
                    progress={75}
                    striped={true}
                    animated={true}
                    state='warning'/>
                <Progressbar
                    progress={100}
                    striped={true}
                    animated={true}
                    state='danger'/>

                <Row>
                    <Col size={6}>tibi</Col>
                    <Col size={6}>tibi</Col>
                </Row>
                <Row>
                    <Col size={3}>tibi</Col>
                    <Col size={3}>tibi</Col>
                    <Col size={3}>tibi</Col>
                    <Col size={3}>tibi</Col>
                </Row>
                <Row>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                    <Col>tibi</Col>
                </Row>
                <Row>
                    <Col size={1}>tibi</Col>
                    <Col size={2}>tibi</Col>
                    <Col size={3}>tibi</Col>
                    <Col size={4}>tibi</Col>
                    <Col size={5}>tibi</Col>
                    <Col size={6}>tibi</Col>
                    <Col size={7}>tibi</Col>
                    <Col size={8}>tibi</Col>
                    <Col size={9}>tibi</Col>
                    <Col size={10}>tibi</Col>
                    <Col size={11}>tibi</Col>
                    <Col size={12}>tibi</Col>
                </Row>

                <NameCard name="Arnar Leifsson" email="arnarl@ru.is" telephone="+357-777-7777" imageUrl="http://jpsierens.com/wp-content/uploads/2015/02/goku_by_maffo1989-d4vxux4.png"/>
                <Carousel
                    images = {['https://yt3.ggpht.com/-gqWw2ln-AFM/AAAAAAAAAAI/AAAAAAAAAAA/p6f_Yd_96Mk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
                        'http://www.clipartbest.com/cliparts/xig/LzL/xigLzLA6T.jpg'
                    ]}
                    size = 'medium'/>
                <DatePicker
                    onDatePick = {date => this.setState({date})}
                    locale = "en-EN" />

                <Tabs
                    theme = "dark"
                    layout = "horizontal"
                    onSelect = {newTab => this.setState({ tab: newTab })}
                    currentSelectedTab = { this.state.tab }>
                    <Tab selectionKey = {1} title = "Tab 1">
                        Content 1
                    </Tab>
                </Tabs>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

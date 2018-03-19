import React from 'react';
import styles from './Carousel.css';

class CarouselSlide extends React.Component {
    constructor(props) {
        super(props);
        console.log("slides index: ", props);
    }

    render() {
        console.log("index: ", this.props.index);
        console.log("slideIndex", this.props.slideIndex);
        if(this.props.index == this.props.slideIndex) {
            return(
                <li className = {styles.carouselSlideActive}>
                    <img src = {this.props.slide} />
                </li>
            );
        } else {
            return(
                <div>
                    <h2 className = {styles.carouselSlide}></h2>
                </div>
            );
        }
    }
}

export default CarouselSlide;

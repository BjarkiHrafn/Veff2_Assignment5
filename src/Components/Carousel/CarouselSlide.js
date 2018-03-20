import React from 'react';
import styles from './Carousel.css';

class CarouselSlide extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        if(this.props.index == this.props.slideIndex) {
            return(
                <li className = {styles.carouselSlideActive}>
                    <div className = {styles.imgStyle} style={{ backgroundImage: `url(${this.props.slide})`}}></div>
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

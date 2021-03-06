import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';
import CarouselSlide from './CarouselSlide';

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            slideIndex: 0,
            images: props.images,
        })
        this.changeSlide = this.changeSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    changeSlide(index) {
        this.setState({slideIndex: index});
    }

    prevSlide(n) {
        n.preventDefault();

        let index = this.state.slideIndex;
        let slides = this.state.images;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            slideIndex: index
        });
    }

    nextSlide(n) {
        n.preventDefault();

        let index = this.state.slideIndex;
        let slides = this.state.images;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            slideIndex: index
        });
    }

    render() {

        return(

            <div className = {styles.slideshowContainer}>
                <a className={styles.next} onClick={i => this.prevSlide(i)}>&#10095;</a>
                {this.props.images.map((slide, index) =>
                    <CarouselSlide
                        key={index}
                        index={index}
                        slideIndex={this.state.slideIndex}
                        slide={slide}
                    />
                )}
                <a className={styles.prev} onClick={i => this.nextSlide(i)}>&#10094;</a>
            </div>

        );
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.string.isRequired
}

export default Carousel;

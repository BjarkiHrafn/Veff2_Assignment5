import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css'

const imagesArr = ['https://instrumentalfx.co/wp-content/uploads/2017/11/Ed-Edd-n-Eddy-theme.png',
    'http://superawesomevectors.com/wp-content/uploads/2017/05/courage-the-cowardly-dog-vector-800x566.jpg',
    'https://ih1.redbubble.net/image.210337845.4654/flat,800x800,075,f.jpg',
    'https://vignette.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045',
    'https://vignette.wikia.nocookie.net/johnnybravo/images/b/bb/Johnnyb001.gif/revision/latest?cb=20120620184904']

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: imagesArr,
            imageCount: 0,
            imagesLenght: imagesArr.length,
            currImage: imagesArr[0],
            interval: this.props.interval,
            spin: 'spin',
        };
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    increaseCounter() {
        if(this.state.imageCount < this.pops.interval) {
            this.setState({imageCount : imageCount++});
        }
    }

    componentDidMount() {
        console.log('state: ', this.state);

        setInterval( () => {
            if(this.state.spin === 'spin') {
                this.setState({spin: ''});
            } else {
                if(this.state.imageCount < this.state.imagesLenght - 1) {
                    let tempCount = this.state.imageCount + 1;
                    this.setState({imageCount : tempCount});;
                } else {
                    this.setState({imageCount : 0});

                }
                this.setState({spin: 'spin'})
                let tempImage = this.state.images[this.state.imageCount];
                this.setState({currImage: tempImage});
            }

        }, ((this.state.interval+2)/2) * 1000); // interval + animationtime / 2 (because it needs to run twice to change the image and then multiply by 1000 to get seconds)

    }

    render() {

        return (
            <div style={{ backgroundImage: `url(${this.state.currImage})`}} className={`${styles.image} ${styles[`${this.state.spin}`]}`}></div>
        );
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3
}


export default CartoonNetworkSpinner;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './NameCard.css';

class NameCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            imgURl: props.imageUrl,
            name: props.name,
            email: props.email,
            telephone: props.telephone,
        };
    }

    componentDidMount() {
        var img = new Image();
        img.src = this.state.imageUrl;
    }

    render() {
        const {cardUrl} = this.props;

        return(
            <div className = {styles.card}>
                <img src = {this.state.imgURl}className = {styles.img}/>
                <div className = {styles.container}>
                    <h4>{this.state.name}</h4>
                    <p>email: {this.state.email}</p>
                    <p>telephone: {this.state.telephone}</p>

                </div>
            </div>
        )
    };
};

NameCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default NameCard;

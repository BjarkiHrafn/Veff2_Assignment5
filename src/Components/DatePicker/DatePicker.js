import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.css';

class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date().toLocaleString(this.props.locale),
        }
    }

    componentDidMount() {
        var test = new Date();
        console.log(test.getTime());
    }

    render() {
        return(
            <div>
                <label htmlFor = "date" >choose a date</label>
                <input type = "date" name ="date" onChange = { () =>  { this.props.onDatePick(this.state.date) }}/>
                <div>
                    <input type = "text"/>
                </div>
            </div>
        );
    }

}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
}

export default DatePicker;

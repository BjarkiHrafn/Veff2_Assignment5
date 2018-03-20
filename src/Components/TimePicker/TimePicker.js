import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutesArr: [],
            hoursArr: [],
            AMPMArr: [],
            hour: '00',
            minute: '00',
            AMPM: ''
        };
        const format = this.props.format;

        for(var i = 0; i < 60; i++) {
            var number;
            if(i < 10) {
                number = ('0' + i.toString());
            } else {
                number = i.toString();
            }
            this.state.minutesArr.push([i,number]);
        }

        if(format == 12) {
            this.state.hour= '12';
            this.state.AMPM = 'AM';
            for(var j = 1; j <= format; j++) {
                var number2;
                if(j < 10) {
                    number2 = ('0' + j.toString());
                } else {
                    number2 = j.toString();
                }
                this.state.hoursArr.push([j,number2]);
            }
        } else {
            this.state.hour = '00';
            for(var k = 0; k < format; k++) {
                var number3;
                if(k < 10) {
                    number3 = ('0' + k.toString());
                } else {
                    number3 = k.toString();
                }
                this.state.hoursArr.push([k,number3]);
            }
        }

        this.hourchange = this.hourchange.bind(this);
        this.minuteChange = this.minuteChange.bind(this);
        this.AMPMchange = this.AMPMchange.bind(this);
    }

    hourchange (e) {
        this.setState({hour: e.target.value});
        const{onTimePick} = this.props;
        onTimePick(e.target.value + this.state.minute + this.state.AMPM);
    }
    minuteChange (e) {
        const{onTimePick} = this.props;
        this.setState({minute: e.target.value});
        onTimePick(this.state.hour + e.target.value + this.state.AMPM);
    }
    AMPMchange (e) {
        const{onTimePick} = this.props;
        this.setState({AMPM: e.target.value});
        onTimePick(this.state.hour + this.state.minute + e.target.value);
    }

    render() {
        if(this.props.format == 12) {
            return (
                <div className={styles.timePickerContainerAMPM}>
                    <select className={`${styles.timePicker} ${styles.hour}`} onChange={this.hourchange}>
                        {this.state.hoursArr.map(h => <option key = {h[1]} value={h[1]}>{h[1]}</option>)}
                    </select>
                    <p className={styles.inBetween}> : </p>
                    <select className={`${styles.timePicker}`} onChange={this.minuteChange}>
                        {this.state.minutesArr.map(m => <option key = {m[1]} value={m[1]}>{m[1]}</option>)}
                    </select>
                    <select className={`${styles.AMPM}`} onChange={this.AMPMchange}>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>
                    </select>
                </div>
            );
        } else {
            return (
                <div className={styles.timePickerContainer}>
                    <select className={`${styles.timePicker}  ${styles.hour}`} onChange={this.hourchange}>
                        {this.state.hoursArr.map(h => <option key = {h[0]} value={h[1]}>{h[1]}</option>)}
                    </select>
                    <p className={styles.inBetween}> : </p>
                    <select className={`${styles.timePicker}`} onChange={this.minuteChange}>
                        {this.state.minutesArr.map(m => <option key = {m[0]} value={m[1]}>{m[1]}</option>)}
                    </select>
                </div>
            );
        }
    }
}

TimePicker.propTypes = {
    onTimePick: PropTypes.func,
    format: PropTypes.number
}

TimePicker.defaultProps = {
    format: 24
}


export default TimePicker;

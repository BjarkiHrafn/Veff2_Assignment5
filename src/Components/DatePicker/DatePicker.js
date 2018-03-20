import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.css';

class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //date: new Date().toLocaleString(this.props.locale),
            date: new Date(),
            days: [],
            daysInMonth: [],
            currentMonth: 0,
            currentYear: 0,
        }
        this.daysInMonth = this.daysInMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.renderMonth = this.renderMonth.bind(this);
    }

    componentWillMount() {
        var initialDate = new Date();
        console.log(initialDate.getMonth());
        this.setState({
            currentMonth: initialDate.getMonth(),
            currentYear: initialDate.getFullYear()
        });

    }

    daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    nextMonth(i) {
        i.preventDefault();

        var month = this.state.currentMonth;
        var year = this.state.currentYear;

        if(month == 11){
            year += 1;
            month = 0;
        } else {
            month += 1;
        }

        this.setState({
            currentYear: year,
            currentMonth: month,
            date: new Date(year, month, 0).getDate(),
        })

    }

    prevMonth(i) {
        i.preventDefault();

        var month = this.state.currentMonth;
        var year = this.state.currentYear;

        if(month <= 0){
            year -= 1;
            month = 11;
        } else {
            month -= 1;
        }

        this.setState({
            currentYear: year,
            currentMonth: month,
            date: new Date(year, month, 0).getDate(),
        })

    }

    renderMonth(month) {
        switch(month){
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'Octaber';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    }


    render() {
        const calander = this.state.days;
        const month = this.state.currentMonth;
        const year = this.state.currentYear;
        const totalDays = new Date(this.state.currentYear, this.state.currentMonth+1, 0).getDate();
        //console.log(new Date(year, month, 31).toLocaleDateString());
        //var arr = Array.apply(1, {length: totalDays+1}).map(Number.call, Number);
        console.log("month: ", month);
        console.log("total days: ", totalDays);

        var arr = [];
        for(let i = 0; i <= totalDays; i++) {
            arr.push(i);
        }

        arr.splice(0, 1);


        return(
            <div className = {styles.calContainer}>
                <div className = {styles.calMonth}>{this.renderMonth(month)} {year}</div>
                <span className={styles.prev} onClick={i => this.prevMonth(i)}>&#10094;</span>
                <span className={styles.next} onClick={i => this.nextMonth(i)}>&#10095;</span>
                <div className = {styles.tableContainer}>
                    {arr.map((day, index) =>
                        index%7 == 0 ?
                            <span key = {index}>
                                <br/>
                                <p className = {styles.tableData} onClick = { () =>  { this.props.onDatePick(new Date(this.state.currentYear, this.state.currentMonth, index+1)) }}>{day}</p>
                            </span>
                            :
                            <p key = {index} className = {styles.tableData} onClick = { () =>  { this.props.onDatePick(new Date(this.state.currentYear, this.state.currentMonth, index+1)) }}> {day}</p>
                    )}
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

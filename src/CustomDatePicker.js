import React from "react";
import DatePicker from "react-datepicker";
import './CustomDatePicker.css';
import "react-datepicker/dist/react-datepicker.css";


class CustomDatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageDate: new Date()

    };
  }

  handleChange = date => {
    this.setState( state => ({
      imageDate : date
    }));
  };

  render() {
    return (
      <input placeholderText = "Choose a date"
        class="form-control py-4 px-4"
        id="datepicker"
        selected = {this.state.imageDate}
        onChange = {this.handleChange}
        dateFormat="yyyy : MMMM : d"
      />
    );
  }
}


export default CustomDatePicker;

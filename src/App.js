import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      imageDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ imageDate: event.target.value });
  };

  handleClick(event) {
    alert('A date was submitted for EPI: ' + this.state.imageDate);
    event.preventDefault();
  }

render(){
  return (

      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="form-group mb-4">
          <p class="text-center text-white"> Choose a date for Earth Polychromatic Image </p>
            <div className="date input-group p-0 shadow-sm">
              <input
                type="date"
                value = {this.state.imageDate}
                onChange = {this.handleChange}
                className="form-control py-4 px-4"
                id="imageDate"/>
              <div className ="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div>
            </div>
            <div className="text-center" id="findEPI">
              <button onClick={this.handleClick} type="button" className="btn btn-primary">Find EPI</button>
            </div>

            <div className="text-center" id="earthImage">
              <img src="https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png" class="img-thumbnail"/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

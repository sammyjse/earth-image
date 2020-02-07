import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      imageDate: ''

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ imageDate: event.target.value });
  };

render(){
  return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="form-group mb-4">


            <div className="date input-group p-0 shadow-sm" data-provide="datepicker">
              <input type="text"
                value = {this.state.imageDate}
                onChange = {this.handleChange}
                placeholder="Choose a date to retrieve EPI"
                className="form-control py-4 px-4"
                id="imageDate"/>
              <div className ="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div>
            </div>


            <div className="text-center" id="findEPI">
              <button type="button" className="btn btn-primary">Find EPI</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

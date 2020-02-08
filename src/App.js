import React from 'react';
import './App.css';
import Image from './Image';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      imageDate: '',
      displayImage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ imageDate: event.target.value });
  };

  handleClick() {
    const {displayImage} = this.state;
    this.setState({displayImage : !displayImage});
  }

render(){

  const isDisplayImage = this.state.displayImage;
  let imageTrigger;




  return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="form-group mb-4">
          <p className="text-center text-white"> Choose a date for Earth Polychromatic Image </p>
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
              {this.state.displayImage && <Image imageDate = {this.state.imageDate}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

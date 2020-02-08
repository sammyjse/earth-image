import React from 'react';
import Image from './Image';

class ImageTrigger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayImage : props.isDisplayImage,
      date  : props.date
    };
  }


  render(){

    const isDisplayImage = this.state.isDisplayImage;
    let epiOutput;

    if (isDisplayImage) {
      console.log("agfagsdgdsgds");
      epiOutput = <Image date = {this.state.date}/>

    }
    return (
      <div className="text-center" id="earthImage">
        {epiOutput}
      </div>
    );
  }
}

export default ImageTrigger;

import React from 'react';
import './Image.css';
class Image extends React.Component {

  constructor(props) {
    super(props);
    const dateSplit = props.imageDate.split('-');
    this.state = {
      imageDate: props.imageDate,
      year: dateSplit[0],
      month: dateSplit[1],
      days: dateSplit[2],
      enhancedepiAPI: "https://epic.gsfc.nasa.gov/api/enhanced/date/" + props.imageDate,
      retrieveImageAPI: "https://epic.gsfc.nasa.gov/archive/natural/" + dateSplit[0] +
       "/" + dateSplit[1] + "/" + dateSplit[2] + "/png/epic_1b_",
      epiDate : [],
      displayImages: false,
      errorMessage : ''
    };
  }

  componentDidMount() {
    const fetchPromise = fetch(this.state.enhancedepiAPI);
    const epiDate = this.state.epiDate;
    const retrieveImageAPI = this.state.retrieveImageAPI;

    fetchPromise.then(response => {
      return response.json();
    }).then(images => {
      epiDate.push(images.map(image => retrieveImageAPI + image.identifier + ".png"));
      console.log(epiDate);

      if (epiDate[0].length == 0){
        this.setState({displayImages : false});
        this.setState({errorMessage : alert("EPI is not available for the date chosen.")});
      } else {
        this.setState({displayImages : true});
        this.setState({errorMessage : ''});
      }
    });
  }

  render(){

    const displayImages = this.state.displayImages;
    const images = this.state.epiDate[0];
    const errorMessage = this.state.errorMessage;

    return (
    <div className="row">
    {displayImages ? images.map(function(imageSrc) {
                return (
                  <div className="column">
                    <img className="d-block w-100" src={ imageSrc }/>
                  </div>
                );
              }) : (errorMessage)} </div>
    );
  }



}



export default Image;

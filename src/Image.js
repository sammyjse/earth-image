import React from 'react';
import './Image.css';
class Image extends React.Component {


  // https://stackoverflow.com/questions/60164160/react-render-new-images-on-button-click-new-fetch-call-to-retrieve-images-each

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
      displayImages: false
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
      this.setState({displayImages : true});
    });
  }

  render(){

    const displayImages = this.state.displayImages;
    const images = this.state.epiDate[0];

    return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
    {displayImages && images.map(function(imageSrc) {
                return (
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={ imageSrc }/>
                  </div>
                );
              })} </div></div>
    );
  }



}



export default Image;

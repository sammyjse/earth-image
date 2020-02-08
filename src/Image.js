import React from 'react';

class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageDate: props.imageDate,
      enhancedepiAPI: "https://epic.gsfc.nasa.gov/api/enhanced/date/" + props.imageDate,
      epiDate : []
    };
  }

  componentDidMount() {

    fetch(this.state.enhancedepiAPI)
    .then(results =>{
      console.log(results.json());
    })

  }

  render(){

    return (
      <div>sdgdsgdsgsdg </div>
    )
  }



}



export default Image;

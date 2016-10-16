import React from 'react';

import ClickableImage from './ClickableImage';

export default class Content extends React.Component {

	static propTypes = {
    	onLoginSuccess: React.PropTypes.func,
  	}

  constructor() {
    super();
    this.getImgs = this._getImgs.bind(this);
    this.state = {
      removablePhotos: [],
    };
  }

  isBad(concepts) {
    for (let i = 0; i < concepts.length; i++) {
      if (concepts[i].value >= .40) {
        return true;
      }
    }
    return false;
  }

  runClarifai(data) {
    let clarify = this.props.clarify;
    let img;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < data.length; i++) {
        let func = (img) => {
          clarify.models.predict('b931c49945d649eba9e1cd2830cdc9ef', img.source)
          .then((response) => {
            if (this.isBad(response.data.outputs[0].data.concepts)) {
              let obj = {
                imageUrl: img.source,
                keyWord: response.data.outputs[0].data.concepts[0].name,
                imgId: img.id,
              };
              let rem = this.state.removablePhotos;
              rem.push(obj);
              this.setState({
                removablePhotos: rem,
              });
            }
          });
        }
        func(data[i])
      }
    });
  }

  _getImgs() {
    let uid = this.props.uid;
    let access_token = this.props.accessToken;

    new Promise((resolve, reject) => {
      FB.api(
        `/${uid}/photos/`,
        (response) => {
          if (response && !response.error) {
            this.runClarifai(response.data);
          }
        });
    });
  }

	render() {
		return (
	        <div>
		        <button type="button" onClick={this.getImgs}>Click Me!</button>
		        {this.state.removablePhotos.map((obj) => {
			        return <ClickableImage obj={obj} />
		        })}
	        </div>
	    )
    }
}
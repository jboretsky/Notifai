import React from 'react';

import ClickableImage from './FeedItem.jsx';

export default class Feed extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    clarifai: React.PropTypes.object
  };

  constructor() {
    super();

    this.state = {
     imgs: []
    };
  }

  componentWillMount(){
    this.getImgs();
  }

  getImgs = () => {
    let uid = this.props.user.uid;
    let access_token = this.props.user.accessToken;

    FB.api(
      `/${uid}/photos/`,
      (response) => {
        if (response && !response.error) {
          this.processImgs(response.data);
        }
      });
  }

  processImgs(rawImgs) {
    let clarifai = this.props.clarifai;

    let func = (rawImg) => {
      clarifai.models.predict('b931c49945d649eba9e1cd2830cdc9ef',rawImg.source)
      .then((response) => {
        let img = {
          url: rawImg.source,
          concepts: response.data.outputs[0].data.concepts,
          id: rawImg.id
        };

        let processedImgs = this.state.imgs;
        processedImgs.push(img);
        this.setState({ imgs: processedImgs });
      });
    };

    for (let i = 0; i < rawImgs.length && i < 10; i++) func(rawImgs[i]);
  }

	render() {
		return (
	        <div>
		        {this.state.imgs.map((img) => {
			        return <ClickableImage key={img.id} image={img} />
		        })}
	        </div>
	    )
    }
}
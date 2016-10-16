import React from 'react';

export default class FeedItem extends React.Component {
  static propTypes = {
    image: React.PropTypes.object,
  };

  _alertUser = () => {
    alert("Image id is " + this.props.image.imgId);
  }

  render() {
    return (
      <div className="feed-item">
        <img src={this.props.image.url} onClick={this.alertUser} />
      </div>
    );
  }
}
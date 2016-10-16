import React from 'react';

export default class ClickableImage extends React.Component {
  static propTypes = {
    obj: React.PropTypes.object,
  };

  constructor() {
    super();
    this.alertUser = this._alertUser.bind(this);
  }

  _alertUser() {
    alert("Image id is " + this.props.obj.imgId);
  }

  render() {
    return (
      <div>
        <img key={this.props.obj.imgId} src={this.props.obj.imageUrl} onClick={this.alertUser} />
      </div>
    );
  }
}
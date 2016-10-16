import React from 'react';

export default class FeedItem extends React.Component {
  static propTypes = {
    image: React.PropTypes.object,
  };

  render() {
    return (
      <li className="feed-item">
        <img src={this.props.image.url}/>
      </li>
    );
  }
}
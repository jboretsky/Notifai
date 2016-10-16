import React from 'react';

export default class FeedItem extends React.Component {
  static propTypes = {
    image: React.PropTypes.object,
    user: React.PropTypes.object
  };

  render() {
    var image = { 
      backgroundImage: 'url(' + this.props.image.url + ')',
      height: this.props.image.height
    };
    return (
      <li className="feed-item" style={image}>
        <a className="btn btn-sm" target="blank" href={this.props.image.link}>
          Open on Facebook
        </a>
        <div className="info">
          <p className="posted-by">
            Posted by <b>{this.props.user.uid === this.props.image.userId ? "You" : this.props.image.user}</b>
          </p>
          <div className="tags">
            {this.props.image.concepts.slice(0,4).map((concept) => {
              var height = { height: concept.value * 26 }
              return(
                <div key={concept.id} className="chip-sm">
                  <span className="value">
                    <div className="fill" style={height}></div>
                  </span>
                  <span className="chip-name">{concept.name}</span>
                </div>
              )})}
          </div>
        </div>
      </li>
    );
  }
}
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
        <div className="info">
          <p className="posted-by">Posted by {this.props.image.user}</p>
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
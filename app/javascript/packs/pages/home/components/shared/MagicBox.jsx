import React, { Component } from "react";

class MagicBox extends Component {
  // props: title borderColor bgColor fontColor
  render() {
    const contentStyle = {
      backgroundColor: this.props.backgroundColor
    };

    const borderStyle = {
      borderColor: this.props.borderColor
    };

    return (
      <div className="Magic">
        <div className="Magic__content" style={contentStyle}>
          <p className="Magic__title">{this.props.title}</p>
          <div className="Magic__border" style={borderStyle} />
        </div>
      </div>
    );
  }
}

export default MagicBox;

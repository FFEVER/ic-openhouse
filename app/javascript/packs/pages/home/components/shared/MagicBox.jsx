import React, { Component } from "react";

class MagicBox extends Component {
  // props: title borderColor bgColor fontColor
  render() {
    const contentStyle = {
      borderColor: this.props.contentBorderColor,
      borderWidth: this.props.contentBorderWidth,
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      color: this.props.fontColor
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

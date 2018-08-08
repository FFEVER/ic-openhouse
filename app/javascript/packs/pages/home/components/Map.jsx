import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <iframe
        id="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.9067699958746!2d100.776009!3d13.729736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d856e6ce2ef3bbb!2sInternational+College%2C+King+Mongkut&#39;s+Institute+of+Technology+Ladkrabang!5e0!3m2!1sth!2sus!4v1533567562376"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    );
  }
}

export default Map;

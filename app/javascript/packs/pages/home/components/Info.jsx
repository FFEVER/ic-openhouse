import React, { Component } from "react";
import MagicBox from "./shared/MagicBox";

class Info extends Component {
  render() {
    return (
      <section className="Info" id="Info">
        <img className="ic-icon" src={require("./images/ic-icon.png")} />
        <h2>International College Open House 2018</h2>
        <h3>กิจกรรมเปิดบ้านวิทยาลัยนานาชาติลาดกระบัง</h3>
        <MagicBox
          title="Create Magic with Technology"
          borderColor="#df5f18"
          backgroundColor="#ffffff"
          fontColor="black"
        />
        <p>ระหว่างวันที่ 23-25 สิงหาคม 2018</p>
        <p>ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
      </section>
    );
  }
}

export default Info;

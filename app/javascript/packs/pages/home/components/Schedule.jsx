import React, { Component } from "react";
import MagicBox from "./shared/MagicBox";

class Info extends Component {
  // <img className="ic-icon" src={require("./images/ic-icon.png")} />
  render() {
    return (
      <section className="Schedule" id="Schedule">
        <MagicBox
          title="Schedule"
          borderColor="#ffffff"
          backgroundColor="#29304d"
          fontColor="#ffffff"
          contentBorderWidth="2px"
          contentBorderColor="#4b5b71"
          width="400px"
        />
        <p>กำหนดการรับสมัครน้อง ๆ เข้า workshop</p>
        <div className="Schedule__row">
          <div className="Schedule__col">
            <img src={require("./images/note.svg")} />
            <p>เปิดรับสมัคร</p>
            <small>11 - 17 สิงหาคม 2018</small>
          </div>
          <div className="Schedule__col">
            <img src={require("./images/megaphone.svg")} />
            <p>ประกาศผล</p>
            <p>การคัดเลือกเข้า workshop</p>
            <small>19 สิงหาคม 2018</small>
          </div>
          <div className="Schedule__col">
            <img src={require("./images/payment.svg")} />
            <p>ชำระเงิน</p>
            <small>19 - 21 สิงหาคม 2018</small>
          </div>
          <div className="Schedule__col">
            <img src={require("./images/coding.svg")} />
            <p>น้อง ๆ มา workshop</p>
            <p>ตามวันที่ได้เลือกไว้</p>
            <small>23 - 25 สิงหาคม 2018</small>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;

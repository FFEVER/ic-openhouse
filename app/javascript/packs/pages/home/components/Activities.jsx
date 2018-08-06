import React, { Component } from "react";
import MagicBox from "./shared/MagicBox";

class Activities extends Component {
  render() {
    return (
      <section className="Activities" id="Activities">
        <MagicBox
          title="Activities"
          borderColor="#29304d"
          backgroundColor="#ffffff"
          fontColor="black"
          width="400px"
        />

        <div className="Activities__row">
          <div className="Activities__col Activities__col--chamber">
            <h4>The Secret Chamber</h4>
        <img className="ic-icon" src={require("./images/secretchamber.png")} />
        <p>บูธการจัดเเสดงผลงาน เเละรายละเอียดต่าง ๆ เกี่ยวกับวิทยาลัยนานาชาติของเรา รับรองได้เลยว่า "ว๊าว" แน่นอน (จัดที่ หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ 09.00 - 16.00 ) พบกับบูธ</p>
          </div>
          <div className="Activities__col Activities__col--hat">
            <h4>Sorting hat, where do I belong?</h4>
        <img className="ic-icon" src={require("./images/sortinghat.png")} />
        <p>มาค้นตัวตนผ่านการเเนะนำหลักสูตรจากอาจารย์ผู้เชี่ยวชาญของเรา (สำรองที่นั่งล่วงหน้าผ่านเว็บไซต์ จัดที่วิทยาลัยนานาชาติ อาคารเฉลิมพระเกียรติ 55 พรรษาฯ ชั้น 8 เวลา 11.00 -12.00 และ 14.00 - 15.00 ของทุกวัน)</p>
          </div>
          <div className="Activities__col Activities__col--move">
            <h4>Abracadabra, make it move!</h4>
        <img className="ic-icon" src={require("./images/abracadabra.png")} />
        <p>พบกับ workshop การเขียนโปรแกรม เพื่อคุมคุมระบบต่าง ๆ ผ่านสิ่งที่เรียกว่า Internet of Things(IoT) เป็นระยะเวลาหนึ่งวันเต็ม  (ลงทะเบียนผ่านเว็บไซด์ จัดที่วิทยาลัยนานาชาติ เวลา 09.30 -  16.00)</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Activities;

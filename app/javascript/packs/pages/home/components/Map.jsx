import React, { Component } from "react";
import $ from "jquery";
import MagicBox from "./shared/MagicBox";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIconId: "car"
    };
    this.onTransIconClicked = this.onTransIconClicked.bind(this);
  }

  onTransIconClicked(event) {
    var $iconRow = $(`#${event.target.dataset.id}-icon`);
    var $contentRow = $(`#${event.target.dataset.id}-content`);
    var $prevIconRow = $(`#${this.state.activeIconId}-icon`);
    var $prevContentRow = $(`#${this.state.activeIconId}-content`);

    if (!$iconRow.hasClass("active")) {
      $prevIconRow.removeClass("active");
      $prevContentRow.removeClass("show");
      $iconRow.addClass("active");
      $contentRow.addClass("show");
      this.setState({ activeIconId: event.target.dataset.id });
    }
  }

  render() {
    return (
      <section className="Map" id="Map">
        <MagicBox
          title="Map"
          borderColor="#29304d"
          backgroundColor="#c8c7cf"
          contentBorderWidth="0px"
          fontColor="black"
          width="400px"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.9067699958746!2d100.776009!3d13.729736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d856e6ce2ef3bbb!2sInternational+College%2C+King+Mongkut&#39;s+Institute+of+Technology+Ladkrabang!5e0!3m2!1sth!2sus!4v1533567562376"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />

        <div className="Map__row">
          <div className="Map__col">
            <div
              id="car-icon"
              className="trans-icons__row active"
              data-id="car"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="car">
                รถยนต์
              </p>
              <img
                className="trans-icon"
                src={require("./images/car.svg")}
                data-id="car"
              />
            </div>
            <div
              id="train-icon"
              className="trans-icons__row"
              data-id="train"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="train">
                รถไฟ
              </p>
              <img
                className="trans-icon"
                src={require("./images/train.svg")}
                data-id="train"
              />
            </div>
            <div
              id="bus-icon"
              className="trans-icons__row"
              data-id="bus"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="bus">
                รถเมล์
              </p>
              <img
                className="trans-icon"
                src={require("./images/bus.svg")}
                data-id="bus"
              />
            </div>
            <div
              id="arl-icon"
              className="trans-icons__row"
              data-id="arl"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="arl">
                Airport Rail Link
              </p>
              <img
                className="trans-icon"
                src={require("./images/arl.svg")}
                data-id="arl"
              />
            </div>
            <div
              id="tworoll-icon"
              className="trans-icons__row"
              data-id="tworoll"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="tworoll">
                รถสองแถว
              </p>
              <img
                className="trans-icon"
                src={require("./images/tworoll.svg")}
                data-id="tworoll"
              />
            </div>
            <div
              id="van-icon"
              className="trans-icons__row"
              data-id="van"
              onClick={this.onTransIconClicked}
            >
              <p className="trans-icon-text" data-id="van">
                รถตู้
              </p>
              <img
                className="trans-icon"
                src={require("./images/van.svg")}
                data-id="van"
              />
            </div>
          </div>

          <div className="Map__col Map__col__content">
            <div id="car-content" className="trans-content show">
              <h1>
                <b>รถยนต์ส่วนตัว</b>
              </h1>
              <p>
                - เริ่มจากเส้นทางถนนศรีนครินทร์ที่แยกอ่อนนุช เข้าถนนอ่อนนุช
                (สุขุมวิท77) ระยะทางประมาณ 16 กม. แยกเข้าถนนฉลองกรุง
              </p>
              <br />
              <p>
                - เริ่มจากกรุงเทพฯ ใช้เส้นทางด่วนพิเศษ กรุงเทพฯ–ชลบุรี
                (มอเตอร์เวย์) ออกจากมอเตอร์เวย์ที่จุดกลับรถใต้สะพานเล็กๆ
                ให้เลยทางออกสุวรรณภูมิมาก่อน
                ให้สังเกตทางเข้าขนานกับถนนมอเตอร์เวย์ จากนั้นขับตรงเข้ามาที่
                อาคารเฉลิมพระเกียรต์ 55 ปี จะเป็นอาคารเรียน 8 ชั้น สีเทา
              </p>
              <br />
              <p>
                - เริ่มจากชลบุรีใช้เส้นทางด่วนพิเศษ กรุงเทพฯ–ชลบุรี(มอเตอร์เวย์)
                ออกจากมอเตอร์เวย์ที่ทางเข้าสนามบินสุวรรณภูมิ
                ทางเบี่ยงถนนคู่ขนานมอเตอร์เวย์ ถนนฉลองกรุง
              </p>
            </div>

            <div id="train-content" className="trans-content">
              <h1>
                <b>รถไฟ</b>
              </h1>
              <p>
                สายตะวันออก : สถานีต้นทางกรุงเทพฯ(หัวลำโพง) ผ่าน ยมราช อุรุพงศ์
                พญาไท มักกะสัน อโศก คลองตัน สุขุมวิท71 หัวหมาก บ้านทับช้าง
                ซอยวัดลานบุญ ลาดกระบัง พระจอมเกล้า ปลายทางสถานีหัวตะเข้
              </p>
              <br />
              <b>ขบวนจากกรุงเทพ (หัวลำโพง)</b>
              <p>
                {" "}
                - 379 (กรุงเทพ - หัวตะเข้) ถึงหัวตะเข้ 05.10 *วันจันทร์-ศุกร์
              </p>
              <p> - 275 (กรุงเทพ - อรัญประเทศ) ถึงหัวตะเข้ 07.02</p>
              <p>
                {" "}
                - 283 (กรุงเทพ - บ้านพลูตาหลวง) ถึงหัวตะเข้ 08.13
                *วันจันทร์-ศุกร์
              </p>
              <p>
                {" "}
                - 285 (กรุงเทพ - ชุมทางฉะเชิงเทรา) ถึงหัวตะเข้ 08.13
                *วันเสาร์-อาทิตย์-วันหยุดพิเศษ
              </p>
              <p> - 281 (กรุงเทพ - กบินทร์บุรี) ถึงหัวตะเข้ 08.56</p>
              <br />
              <b>ขบวนออกจากชุมทางฉะเชิงเทรา</b>
              <p>
                {" "}
                - 384 (ชุมทางฉะเชิงเทรา – กรุงเทพ) ถึงหัวตะเข้ 06.25
                *วันจันทร์-ศุกร์
              </p>
              <p> - 372 (ปราจีนบุรี – กรุงเทพ) ถึงหัวตะเข้ 06.59</p>
              <p> - 388 (ชุมทางฉะเชิงเทรา – กรุงเทพ) ถึงหัวตะเข้ 07.34</p>
              <p> - 278 (กบินทร์บุรี – กรุงเทพ) ถึงหัวตะเข้ 09.09</p>
              <br />
              <b>ขบวนออกจากรังสิต</b>
              <p>
                {" "}
                - 376 (รังสิต - หัวตะเข้) ออกรังสิต 05.35 ถึงหัวตะเข้ 07.40
                *รถขบวนนี้ไม่เข้าหัวลำโพง และไม่มีบริการวันเสาร์ อาทิตย์
                วันหยุดพิเศษ
              </p>
            </div>

            <div id="bus-content" className="trans-content">
              <h1>
                <b>รถเมล์</b>
              </h1>
              <p>
                - สาย 1013 พระโขนง - หัวตะเข้ (รถร่วมบริการ)
                ลงรถตรงข้ามสวนพระนคร
                จากนั้นต่อรถสองแถวจากหน้าสวนพระนครเข้ามายังสถาบัน
              </p>
              <br />
              <p>
                <b>รถเมล์ SUVARNABHUMI AIRPORT BUS TERMINAL</b>
              </p>
              <p>- 554 รังสิต – สุวรรณภูมิ (ทางด่วนลงรามอินทรา)</p>
              <p>- 555 รังสิต – สุวรรณภูมิ (ทางด่วนลงดินแดง)</p>
              <p>- 558 พระราม 2 - สุวรรณภูมิ (ทางด่วนลงสุขสวัสดิ์)</p>
            </div>

            <div id="arl-content" className="trans-content">
              <h1>
                <b>ARL</b>
              </h1>
              <p>
                จากสถานีพญาไท ผ่านสถานีราชปรารภ มักกะสัน รามคำแหง หัวหมาก
                บ้านทับช้าง ใช้เวลาประมาณ 30
                นาทีลงที่สถานีลาดกระบังแล้วต่อรถไฟที่สถานีรถไฟลาดกระบัง
                หรือต่อรถสองแถวสาย 777
              </p>
            </div>

            <div id="tworoll-content" className="trans-content">
              <h1>
                <b>รถสองแถว</b>
              </h1>
              <p>- วงกลมวนซ้ายแอร์พอร์ตลิงค์ 7 บาท 5.00-22.00 15 นาที</p>
              <p>- หัวตะเข้ – เทคโน – หนองจอก 7 บาท 5.00-22.00 10 นาที</p>
              <p>- หัวตะเข้ – เทคโน – ฮอนด้า 7 บาท 5.00-22.00 10 นาที</p>
              <p>- วัดราชโกษา – เทคโน – ร่มเกล้า 7 บาท 5.00-20.00 20 นาที</p>
              <p>- หัวตะเข้ – เทคโน – วัดอุทัย 10 บาท 5.00-17.30 40 นาที</p>
              <p>- หัวตะเข้ – เทคโน – บึงบัว 10 บาท 5.00-17.30 30 นาที</p>
            </div>

            <div id="van-content" className="trans-content">
              <b>
                <p>รถตู้ด่วนพิเศษ</p>
              </b>
              <p>- หมอชิตใหม่ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</p>
              <p>- อนุสาวรีย์ชัย - พระจอมเกล้าลาดกระบัง (ทางด่วน)</p>
              <p>- รังสิตฟิวเจอร์ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</p>
              <p>- แฮปปี้แลนด์ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</p>
              <br />
              <b>
                <p>รถตู้ประจำทาง</p>
              </b>
              <p>- หัวตะเข้ – หนองจอก</p>
              <p>- มีนบุรี – บึงบัว – หัวตะเข้</p>
              <p>- มีนบุรี – นิคม – หัวตะเข้</p>
              <p>- หัวตะเข้ – ซีคอนสแควร์*</p>
              <p>- หัวตะเข้ – บางพลี*</p>
              <p>*ลงที่หน้าตลาดหัวตะเข้ รถไม่ได้เข้ามาภายในสถาบัน</p>
              <br />
              <b>
                <p>รถตู้ SUVARNABHUMI AIRPORT BUS TERMINAL</p>
              </b>
              <p>- 549 มีนบุรี – สุวรรณภูมิ</p>
              <p>- 552 อ่อนนุช - สุวรรณภูมิ</p>
              <p>- 552A ปากน้ำ – สุวรรณภูมิ (เฉพาะเช้า-เย็น)</p>
              <p>- 554 สะพานใหม่ – สุวรรณภูมิ (เฉพาะเช้า-เย็น)</p>
              <p>- 555 สุวรรณภูมิ - ดอนเมือง</p>
              <p>- 559 สุวรรณภูมิ – รังสิตฟิวเจอร์</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;

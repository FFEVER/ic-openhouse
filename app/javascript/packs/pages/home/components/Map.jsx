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
              <p className="trans-icon-text">รถยนต์</p>
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
              <p className="trans-icon-text">รถไฟ</p>
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
              <p className="trans-icon-text">รถเมล์</p>
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
              <p className="trans-icon-text">Airport Rail Link</p>
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
              <p className="trans-icon-text">รถสองแถว</p>
              <img
                className="trans-icon"
                src={require("./images/tworoll.svg")}
                data-id="tworoll"
              />
            </div>
          </div>

          <div className="Map__col Map__col__content">
            <div id="car-content" className="trans-content show">
              <p>
                - เริ่มจากกรุงเทพฯ ออกจากมอเตอร์เวย์ที่ถนนร่มเกล้า
                เข้าถนนลาดกระบัง ตรงมาเรื่อยๆเลยสามแยกสุวรรณภูมิ
                ให้ชิดซ้ายใช้สะพานเล็กๆข้ามคลองประเวศ
              </p>
              <p>
                -บุรีรมย์ลงสะพานเลี้ยวซ้ายเข้าถนนฉลองกรุงมาตามทางเรื่อยๆจนถึงคณะวิศวกรรมศาสตร์
                หรือใช้เส้นทางถนนอ่อนนุช >> ลาดกระบัง >> ถนนฉลองกรุง
                ตรงมาสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
              </p>
              <p>
                - เริ่มจากชลบุรี
                เริ่มจากเส้นทางถนนศรีนครินทร์ที่แยกศรีนุชเข้าถนนอ่อนนุช >>
                ลาดกระบัง >> แยกเข้าถนนฉลองกรุง
              </p>
              <p>
                - เริ่มจากเส้นทางตลาดมีนบุรี เข้าถนนสุวินทวงศ์ >> ถนนบึงบัว >>
                ถนนฉลองกรุง
              </p>
            </div>
            <div id="train-content" className="trans-content" />
            <div id="bus-content" className="trans-content" />
            <div id="arl-content" className="trans-content" />
            <div id="tworoll-content" className="trans-content" />
          </div>
        </div>
      </section>
    );
  }
}

export default Map;

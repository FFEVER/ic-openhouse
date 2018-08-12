import React, { Component } from "react";
import MagicBox from "./shared/MagicBox";

class Courses extends Component {
  // <img className="ic-icon" src={require("./images/ic-icon.png")} />
  render() {
    return (
      <section className="Courses" id="Courses">
        <MagicBox
          title="Courses"
          borderColor="#df5f18"
          backgroundColor="#ffffff"
          fontColor="black"
          contentBorderWidth="0px"
          width="500px"
        />

        <div className="Courses__row">
          <div className="Courses__main-col">
            <div className="Courses__col course-icon">
              <img className="ic-icon" src={require("./images/se.svg")} />
            </div>
            <div className="Courses__col course-content">
              <p>Software Engineering (B.Eng.)</p>
              <p>วิศวกรรมซอฟต์แวร์ (วศ.บ.)</p>
            </div>
          </div>
          <div className="Courses__main-col">
            <div className="Courses__col course-icon">
              <img className="ic-icon" src={require("./images/etm.svg")} />
            </div>
            <div className="Courses__col course-content">
              <p>Engineering and Technology </p>
              <p>Management (B.Sc.)</p>
              <p>การจัดการวิศกรรมและเทคโนโลยี (วท.บ.)</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;

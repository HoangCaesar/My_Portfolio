import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Dear Mr/Mrs.Readers,
        </p>
        <p className="a-desc">
          In the past, I studied Computer Science at the top 1 university in Vietnam - Ho Chi Minh University of Technology.
          Now, I am currently studying at Vaasa University of Applied Sciences, specializing in Embedded System.
          <br/>
          <br/>
          Ironically, I found out my passion in the covid situation when I spent all my fee time to challenge myself at the new field,
          Web Development. That's a reason why you and I are here - my portfolio and I learn everything from zero to hero by myself.
          I just want to be better everyday 1%, that's enough!
          <br/>
          <br/>
          Thank you for reading!
          <br/>
          Caesar
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Astronomy and Astrophysics Competition 2018</h4>
            <p className="a-award-desc">
            This is an international science competition that enables students from all countries to prove their skills and to unleash their creativity in the fields of astronomy and astrophysics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

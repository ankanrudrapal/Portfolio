import "./intro.css";
import Me from '../../img/Me.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ankan Rudrapal</h1>
          <div className="i-title">
            <div className="i-title-item">Front-End Developer</div>
          </div>
          <p className="i-desc">
            My portfolio is a representation of all that I have leraned and accomplished as a Front end developer perhaps being a Mechanical Engineer.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am passionate about making real life websites which we use in our daily life and making their responsive design.
        </p>
        <p className="a-desc">
          I love making websites and I am looking for an opportunity to enhance
          my professional skills, capabilities and knowledge in an organization
          which recognizes the value of hardwork and trusts me with
          responsibilities and challenges.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "../../App.css";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="bio br-2 bs pointer">
        <h1>Antonio Manno</h1>
        <h3>Junior Web Developer</h3>
        <p>
          I'm a Full Stack Web Developer with a specialization in Front End
          development. Eager to leverage my skills and knowledge to contribute
          effectively to dynamic web development projects. Committed to
          delivering innovative, user-centric solutions while continuously
          enhancing my proficiency in cutting-edge technologies.
        </p>
      </div>
      <div className="skills br-2 bs pointer">
        <div id="title">
          <h2>Main Skills</h2>
        </div>
        <i id="html" class="fa-brands fa-html5"></i>
        <i id="css" class="fa-brands fa-css3-alt"></i>
        <i id="react" class="fa-brands fa-react"></i>
        <i id="python" class="fa-brands fa-python"></i>
      </div>
      <div className="portfolio br-2 bs pointer"></div>
      <div className="contact br-2 bs pointer"></div>
    </div>
  );
}

export default Home;

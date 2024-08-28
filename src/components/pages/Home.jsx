import React, { useState } from "react";
import "../../App.css";
import "./Home.css";
import ContactForm from "../ContactForm";

function Home() {
  const [hoverClass1, setHoverClass1] = useState("hidden");
  const [hoverClass2, setHoverClass2] = useState("hidden");
  const [hoverClass3, setHoverClass3] = useState("hidden");
  const [hoverClass4, setHoverClass4] = useState("hidden");

  return (
    <div className="home">
      {/* BIO SECTION */}
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

      {/* SKILLS SECTION */}
      <div className="skills br-2 bs pointer">
        <div id="skillsTitle">
          <h2>Main Skills</h2>
        </div>
        <i id="html" class="fa-brands fa-html5"></i>
        <i id="css" class="fa-brands fa-css3-alt"></i>
        <i id="react" class="fa-brands fa-react"></i>
        <i id="python" class="fa-brands fa-python"></i>
      </div>

      {/* PORTFOLIO SECTION */}
      <div className="portfolio br-2 bs pointer">
        <div id="portfolioTitle">
          <h2>Portfolio Preview</h2>
        </div>
        <div
          id="card-1"
          className="card br-2"
          onMouseEnter={() => setHoverClass1("card-title")}
          onMouseLeave={() => setHoverClass1("hidden")}
        >
          <div className={hoverClass1}>
            <h3>POUCH</h3>
            <p>Finance tracking app</p>
          </div>
        </div>
        <div
          id="card-2"
          className="card br-2"
          onMouseEnter={() => setHoverClass2("card-title")}
          onMouseLeave={() => setHoverClass2("hidden")}
        >
          <div className={hoverClass2}>
            <h3>SURVIVOR</h3>
            <p>Film Promoting Website</p>
          </div>
        </div>
        <div
          id="card-3"
          className="card br-2"
          onMouseEnter={() => setHoverClass3("card-title")}
          onMouseLeave={() => setHoverClass3("hidden")}
        >
          <div className={hoverClass3}>
            <h3>DINEMATE</h3>
            <p>Restaurant booking app</p>
          </div>
        </div>
        <div
          id="card-4"
          className="card br-2"
          onMouseEnter={() => setHoverClass4("card-title")}
          onMouseLeave={() => setHoverClass4("hidden")}
        >
          <div className={hoverClass4}>
            <h3>Heritage Housing</h3>
            <p>Data Analytics research study</p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact br-2 bs pointer">
        <h2>Contact</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;

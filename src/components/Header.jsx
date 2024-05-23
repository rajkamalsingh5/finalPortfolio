import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "forphone" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};


const NavContent = ({ setMenuOpen }) => (
  <>
    <h2><span style={{color:"red"}}>R</span>AJKAMAL.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        HOME
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        PROJECTS
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        TIMELINE
      </a>
      <a onClick={() => setMenuOpen(false)} href="#academics">
       ACADEMICS
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        CONTACT
      </a>
    </div>
    <a href="mailto:saurabhsingh75555@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
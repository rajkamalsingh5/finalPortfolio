import React from "react";
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assets/random.jpg"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
const Home = ({ ratio }) => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
          Web Developer/Coder
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Hi,I'm RAJKAMAL","from NIT-B.."],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:saurabhsingh75555@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={me} alt="Rajkamal" />
      </section>
     
      <BsChevronDown />
    </div>
  );
};

export default Home;
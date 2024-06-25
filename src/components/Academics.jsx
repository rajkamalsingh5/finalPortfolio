import React from "react";
import { motion } from "framer-motion";
import { AiFillBook ,} from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";

const Academics = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="academics">
      <h2>ACADEMICS.</h2>
      <section>
        <motion.div
          className="AcademicsBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>CBSE Xth Board 96.4% (best 5)</h3>

          <h3>CBSE XIIth Board 97.4%</h3>
        </motion.div>
        <motion.div
          className="AcademicsBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaBookOpen />
          <span>Qualified JEE ADVANCED</span>
        </motion.div>
        <motion.div
          className="AcademicsBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaBookOpen />
          <span>Qualified JEE MAINS</span>
        </motion.div>
        <motion.div
          className="AcademicsBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillBook />
          <span> 8.98 cgpa (till 4th sem)</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Academics;
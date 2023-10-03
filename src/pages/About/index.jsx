import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
  return (
    <div className={styles.container}>
      <Header title="About" />
      <section className={styles.section}>
        <h2>ALI ROSI</h2>
        <em>Junior Software Developer</em>
        <h3>About Me</h3>
        <p>
          I see myself as someone who loves technology and I am also a Software
          Developer, and I am always eager to learn and adapt to newly developed
          technologies
        </p>
        <h3>Contact</h3>
        <em>+62</em>
        <em>alirosi3214@gmail.com</em>
        <br />
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/alirosi3214/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#0072b1" }}
            />
          </a>
          <a
            href="https://www.instagram.com/rossi88z/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a href="https://github.com/AliRosi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#282828" }}
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

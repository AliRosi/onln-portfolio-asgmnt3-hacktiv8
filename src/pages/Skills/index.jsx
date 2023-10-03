/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Header title="Skills" />
      <section className={styles.section}>
        <Skill title="HTML" />
        <Skill title="Cascading Style Sheets (CSS)" />
        <Skill title="JavaScript" />
        <Skill title="React JS" />
        <Skill title="PHP" />
        <Skill title="React Native" />
        <Skill title="Flutter" />
        <Skill title="Python" />
        <Skill title="Java" />
        <Skill title="Problem Solving" />
      </section>
    </div>
  );
};

export default Skills;

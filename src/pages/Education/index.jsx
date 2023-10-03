import hacktiv8 from "../../assets/hacktiv8.png";
import unkris from "../../assets/unkris.jpg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import EducationSection from "../../components/EducationSection";

const Education = () => {
  return (
    <div className={styles.container}>
      <Header title="Education" />
      <section className={styles.section}>
        <EducationSection
          title="Hacktiv8 Indonesia"
          position="Independent Study, React And React Native For Front End Developer"
          date="Aug 2023 - Present · 3 mos"
          logo={hacktiv8}
        />
        <EducationSection
          title="Krisnadwipayana University"
          position="Bachelor's degree, Informatics Engineering"
          date="2021 - Present"
          logo={unkris}
        />
      </section>
    </div>
  );
};

export default Education;

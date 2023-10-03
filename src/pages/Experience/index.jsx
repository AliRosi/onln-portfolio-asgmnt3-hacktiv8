import unkris from "../../assets/unkris.jpg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";

const Experience = () => {
  return (
    <div className={styles.container}>
      <Header title="Experience" />
      <section className={styles.section}>
        <ExperienceSection
          title="Pengabdian Masyarakat"
          position="Krisnadwipayana University"
          date="Jul 2023 - Aug 2023"
          logo={unkris}
        />
      </section>
    </div>
  );
};

export default Experience;

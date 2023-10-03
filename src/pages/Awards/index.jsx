/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
  return (
    <div className={styles.container}>
      <Header title="Awards" />
      <section className={styles.section}>
        <Award
          title="Won a Gold Medal at the 2023 Indonesian Student Science Competition (KSPI)"
          detail="Issued by Puskanas.id, Yogyakarta · 30 Jul 2023"
        />
      </section>
    </div>
  );
};

export default Awards;

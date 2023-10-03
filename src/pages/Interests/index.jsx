import google from "../../assets/google.png";
import microsoft from "../../assets/microsoft.png";
import hacktiv8 from "../../assets/hacktiv8.png";
import unkris from "../../assets/unkris.jpg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Interest from "../../components/Interest";

const Interests = () => {
  return (
    <div className={styles.container}>
      <Header title="Interests" />
      <section className={styles.section}>
        <Interest title="Google" logo={google} />
        <Interest title="Microsoft" logo={microsoft} />
        <Interest title="Hacktiv8 Indonesia" logo={hacktiv8} />
        <Interest title="Krisnadwipayana University" logo={unkris} />
      </section>
    </div>
  );
};

export default Interests;

import styles from "./page.module.css";
import Header from "./components/headers/Header";
import FormTest from "./components/forms/FormTest";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.form}>
        <FormTest />
      </div>
    </main>
  );
}

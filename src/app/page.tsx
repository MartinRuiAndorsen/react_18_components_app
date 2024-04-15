import styles from "./page.module.css";
import Header from "./components/headers/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
    </main>
  );
}

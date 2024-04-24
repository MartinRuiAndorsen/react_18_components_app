import styles from "./page.module.css";
import Header from "./components/headers/Header";
import LoginForm from "./login/components/LoginForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
    </main>
  );
}

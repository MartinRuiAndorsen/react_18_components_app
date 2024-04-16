import styles from "./page.module.css";
import Header from "./components/headers/Header";
import LoginForm from "./components/forms/LoginForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </main>
  );
}

import Header from "../components/headers/Header";
import LoginForm from "./components/LoginForm";
import styles from "./page.module.css";

export default function Login() {
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

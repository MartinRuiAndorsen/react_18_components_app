import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

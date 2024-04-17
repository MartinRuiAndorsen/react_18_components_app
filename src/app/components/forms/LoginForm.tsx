import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputSection}>
        <label>Email</label>
        <input className={styles.inputField} name="test input" />
      </div>
      <div>
        <label typeof="password">Password</label>
        <input type="password" />
      </div>

      <button className={styles.loginButton} type="submit">
        Login
      </button>
    </form>
  );
}

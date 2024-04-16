import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <label>Email</label>
      <input name="test input" />
      <label typeof="password">Password</label>
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

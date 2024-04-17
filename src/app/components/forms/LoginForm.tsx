import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div>
        <label>Email</label>
        <input name="test input" />
      </div>
      <div>
        <label typeof="password">Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

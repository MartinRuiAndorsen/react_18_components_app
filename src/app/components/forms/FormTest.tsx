import styles from "./form.module.css";

export default function FormTest() {
  return (
    <form className={styles.form}>
      <label>Test label</label>
      <input name="test input" />
      <button type="submit">Submit</button>
    </form>
  );
}

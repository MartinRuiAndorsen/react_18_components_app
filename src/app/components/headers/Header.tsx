import styles from "./header.module.css";

export default function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <a href="/">
          <h2>Home</h2>
        </a>
      </li>
      <li>
        <a href="test2">
          <h2>Header 2</h2>
        </a>
      </li>
      <li>
        <a href="/login">
          <h2>Login</h2>
        </a>
      </li>
    </ul>
  );
}

import styles from "./header.module.css";

export default function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <a href="test1">
          <h2>Header 1</h2>
        </a>
      </li>
      <li>
        <a href="test2">
          <h2>Header 2</h2>
        </a>
      </li>
      <li>
        <a href="test3">
          <h2>Header 3</h2>
        </a>
      </li>
    </ul>
  );
}

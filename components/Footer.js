import Nav from "@components/Nav";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Nav />
      </footer>
    </>
  );
}

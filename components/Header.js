import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className="displayWrapper">
      <div className={styles.header}>
        <a href="/schedule" className={styles.topButtons} target="_blank">
          SCHEDULE
        </a>
        <a href="/">
          <img
            className={styles.logo}
            src="/logo.png"
            alt="Bad Movie Night Logo"
          />
        </a>
        <a
          href="https://discord.gg/39CuzRttnb"
          target="_blank"
          className={styles.topButtons}
        >
          JOIN VOICE CHAT
        </a>
      </div>
    </div>
  );
}

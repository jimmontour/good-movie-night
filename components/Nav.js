import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <ul className={styles.nav}>
      <li>
        <a href="/log" target="_blank">
          WATCH LOG
        </a>
      </li>

      <li>
        <a href="https://www.patreon.com/badmovienighttv" target="_blank">
          SUPPORT ON PATREON
        </a>
      </li>

      <li>
        <a href="https://discord.gg/gmrmfKcFaP" target="_blank">
          JOIN THE DISCORD
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/badmovienighttv/" target="_blank">
          INSTAGRAM
        </a>
      </li>
    </ul>
  );
}

import styles from "./Stream.module.css";

export default function Stream() {
  return (
    <>
      <div className={styles.stream}>
        <iframe
          src="https://vk.com/video_ext.php?oid=763833768&id=456239035&hash=7f9066210e4586be&hd=2"
          className={styles.video}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div className={styles.rightBar}>
          <iframe
            src="https://organizations.minnit.chat/914894370329247/Main?embed&nickname="
            allowTransparency="true"
            className={styles.chat}
          ></iframe>
        </div>
      </div>
    </>
  );
}

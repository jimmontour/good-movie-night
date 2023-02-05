import styles from "./Stream.module.css";

export default function Stream() {
  return (
    <>
      <div className={styles.stream}>
       <iframe
         src="https://www.youtube.com/embed/RwOhdPsZA74"
         className={styles.video}
         title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen>
       </iframe>
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

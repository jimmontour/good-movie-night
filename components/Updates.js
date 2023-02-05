import styles from "./Updates.module.css";

export default function Updates() {
  return (
    <div className={styles.updates}>
      <div className={styles.left}>
        <h3>NOW WATCHING:</h3>
        Son In-Law (1993)
        <div className={styles.description}>
          Country girl Rebecca has spent most of her life on a farm in South
          Dakota, and, when she goes away to college in Los Angeles, Rebecca
          immediately feels out of place in the daunting urban setting.
        </div>
      </div>

      <div className={styles.right}>
        <h3>DRINKING GAME:</h3>
        <div className={styles.description}>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              EtiEtiam ut lorem eros. Donecdio imperdiet, sagittis dictum risus
              mattis.
            </li>
            <li>
              tincidunt. Etiam ut lorem eros. Donec tempus dolor eu odio
              imperdiet, sagittis dictum risus mattis.
            </li>
            <li>
              Etiam consequat maximus tincidunt. Etiam ut lorem eros. Donec
              tempus dolor eu .
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

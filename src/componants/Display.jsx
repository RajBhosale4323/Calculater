import styles from "./Display.module.css";

const Display = ({ val }) => {
  return (
    <input className={styles.display} type="text" value={val} readOnly>
    </input>
  );
};

export default Display;

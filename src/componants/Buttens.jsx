import styles from "./ButtonsContainer.module.css";

const Buttons = ({ User_click }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button} onClick={() => User_click(buttonName)}>  
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

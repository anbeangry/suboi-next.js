import styles from './Button.module.scss';
import clsx from 'clsx'

function Button({ label, background, margin }) { 

  return (
    <button
      className={clsx(styles.button,
        background === "red" && styles.redBg,
        background === "transparent" && styles.transparentBg,
      )}
      style={margin && {
        margin: `${margin} !important`
      }}
    >
      <p className={clsx(styles.smallText, styles.label)}>{label}</p>
    </button>
  );
}
export default Button;

import styles from './Button.module.scss';
import clsx from 'clsx'

function Button({ label, redBg, margin }) { 

  return (
    <button
      className={clsx(styles.button,
        redBg && styles.redBg
      )}
      style={margin && {
        margin: `${margin} !important`
      }}
    >
      <p className={clsx(styles.smallText,
        redBg && styles.label
      )}>{label}</p>
    </button>
  );
}
export default Button;

import styles from './Icon.module.scss'

function Icon({ url, icon }) { 
  return (
    <a className={styles.icon} target="_blank" rel="noreferrer" href={url}>
      {icon}
    </a>
  ) 
}
export default Icon;

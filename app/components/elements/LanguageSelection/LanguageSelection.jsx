import styles from './LanguageSelection.module.scss' 

function LanguageSelection({ }) { 
  return (
    <div className={styles.language}>
      <h4 className={styles.languageText}>VN</h4>
      <p>/</p>
      <h4 className={styles.languageText}>EN</h4>
    </div>
  ) 
}

export default LanguageSelection;

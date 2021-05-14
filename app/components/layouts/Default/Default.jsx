import styles from './Default.module.scss';
import LanguageSelection from '@element/LanguageSelection/LanguageSelection';
import Header from '@module/Header/Header';
import Icon from "@element/Icon/Icon";
import Facebook from '../../../../public/icons/fb.svg'
import Instagram from '../../../../public/icons/ig.svg'
import Youtube from '../../../../public/icons/youtube.svg'
import Spotify from '../../../../public/icons/spotify.svg'
import AppleMusic from '../../../../public/icons/apple-music.svg' 

function Default({ children }) {
  return (
    <div className={styles.default}>
      <Header />
      <LanguageSelection />
      <div className={styles.content}>{children}</div>
      <div className={styles.icons}>
        <Icon url="" icon={<AppleMusic/>}/>
        <Icon url="" icon={<Spotify/>}/> 
        <Icon url="" icon={<Youtube/>}/> 
        <Icon url="" icon={<Instagram/>}/>
        <Icon url="" icon={<Facebook/>}/>
      </div>
    </div>
  );
}

export default Default;

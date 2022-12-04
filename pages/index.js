
import styles from '../styles/Home.module.css'
import VideoListContainer from "../components/VideoListContainer";
import HeaderTop from "../components/HeaderTop";
export default function Home() {
  return (
      <div>
          <HeaderTop />

    <div className={styles.container}>

<VideoListContainer />
    </div></div>
  )
}

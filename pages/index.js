
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import logo from './staticFiles/Logo.png';
import SearchBar from "../components/SearchBar";
import VideoListContainer from "../components/VideoListContainer";
export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
       <Image src={logo} alt="Picture of the author"
                   width={200}
                   height={80} />
        <div className={styles.SearchGroup}>   <SearchBar />
        <button className={styles.SearchButton}>Search</button></div> </div>
<VideoListContainer />
    </div>
  )
}

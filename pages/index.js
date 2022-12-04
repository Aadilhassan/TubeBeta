
import styles from '../styles/Home.module.css'
import VideoListContainer from "../components/VideoListContainer";
import HeaderTop from "../components/HeaderTop";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
export default function Home() {
const router = useRouter();
const query = router.query.q;
const catagory = router.query.catagory;





  return (
      <div>
          <HeaderTop query={query} />

    <div className={styles.container}>

<VideoListContainer catagory={catagory} />
    </div></div>
  )
}

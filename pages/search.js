
import {useEffect, useState} from "react";
import VideoCard from "../components/VideoCard";
import HeaderTop from "../components/HeaderTop";
import styles from "../styles/VideoContainer.module.css";
import {useRouter} from "next/router";

export default  function search() {
    const router = useRouter();
    const query = router.query.q;
    const [videoList, setVideoList] = useState(null);
const [search, setSearch] = useState(router.query.q  ? router.query.q : null);

    const fetchData = async () => {
    fetch('/api/search?q='+search)

        .then(response => response.json())
        .then(data => {
            console.log(data)
            setVideoList(data)
        })
    }


    useEffect(() => {
        console.log(router.query.q)
        fetchData();
    },[search])


    return (
        <div>
            <HeaderTop />
        <div className={styles.Container}>


            {
                videoList && videoList.map((video) => {
                    return <VideoCard key={video.id.videoId} video={video}/>

                })
            }


        </div>
        </div>
    )
}
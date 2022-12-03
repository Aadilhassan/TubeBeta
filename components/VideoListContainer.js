import VideoCard from "../components/VideoCard";
import {useState,useEffect} from "react";
import axios from "axios";
import styles from "../styles/VideoContainer.module.css";
export default function VideoListContainer() {
    const [VideoList, setVideoList] = useState(null);

    useEffect(() => {
        axios.get('/api/trending').then((response) => {
                console.log(response.data);
                setVideoList(response.data);
            })
    },[])

    return (
        <div className={styles.Container}>
            {VideoList && VideoList.map((video) => {
                return <VideoCard key={video.id} video={video}/>
            })}
        </div>
    )
}
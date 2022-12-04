
import {useEffect, useState} from "react";
import VideoCard from "../components/VideoCard";
export default  function search() {
    const [videoList, setVideoList] = useState(null);

    const fetchData = async () => {
    fetch('/api/search', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({q: 'hello'})
    })

        .then(response => response.json())
        .then(data => {
            console.log(data)
            setVideoList(data)
        })
    }


    useEffect(() => {
        fetchData();
    },[])


    return (
        <div>
            <h1>Search</h1>

            {
                videoList && videoList.map((video) => {
                    return <VideoCard key={video.id.videoId} video={video}/>

                })
            }


        </div>
    )
}
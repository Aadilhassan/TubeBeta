import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";


export default function  handler(req, res) {
    let query = req.query.q;
 let idArray = [];
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${process.env.YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                data.items.forEach((item) => {
                    idArray.push(item.id.videoId);
                })

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${idArray.join(',')}&key=${process.env.YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                res.status(200).json(data.items)

            })
            })




}
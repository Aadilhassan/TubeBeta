

export default function  handler(req, res) {
    try {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet,statistics&maxResults=50&q=${req.body.q}&key=${process.env.YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                res.status(200).json(data.items)
            })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({error: e})
    }



}
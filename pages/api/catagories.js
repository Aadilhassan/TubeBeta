
export default function handler(req, res) {
  fetch( `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`)
      .then(response => response.json())
        .then(data => {
            res.status(200).json(data.items)
        })

}
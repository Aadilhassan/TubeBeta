
export default async function handler(req, res) {
   let baseUrl = 'https://www.googleapis.com/youtube/v3/'
    let catagory = req.query.catagory;

  fetch(baseUrl + `videos?part=snippet,statistics&chart=mostPopular${catagory ? `&videoCategoryId=`+ catagory : ''}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
      .then(response => response.json())
      .then(data => {
            res.status(200).json(data.items)
      })
      .catch(err => {
        console.log(err)
      })



}
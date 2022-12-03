

export default async function handler(req, res) {
   let baseUrl = 'https://www.googleapis.com/youtube/v3/'

  fetch(baseUrl + 'videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyDjyzVyxBNNI7g1gziV4nIAqaaC4S5ySkI')
      .then(response => response.json())
      .then(data => {
            res.status(200).json(data)
      })
   // const data = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDjyzVyxBNNI7g1gziV4nIAqaaC4S5ySkI')



}
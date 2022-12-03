

export default async function handler(req, res) {
   let baseUrl = 'https://www.googleapis.com/youtube/v3/'

  fetch(baseUrl + 'videos?part=snippet,statistics&chart=mostPopular&maxResults=50&key=AIzaSyDjyzVyxBNNI7g1gziV4nIAqaaC4S5ySkI')
      .then(response => response.json())
      .then(data => {
            res.status(200).json(data.items)
      })
      .catch(err => {
        console.log(err)
      })



}
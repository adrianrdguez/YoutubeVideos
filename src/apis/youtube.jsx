import axios from 'axios';

const KEY = 'AIzaSyBROHQcVON6PuVCurFa8ZB7vfIjsWRk86o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
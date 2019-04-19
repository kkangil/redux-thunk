import axios from 'axios';
export default {
  getPostAPI: postId => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
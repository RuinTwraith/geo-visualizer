import axios from 'axios';
import { useLocation } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://localhost:1337',
});

export default instance;

// const getPhotos = () => {

//   searchKey = url.pathname.slice(8);
//   axios
//     .get(`/locations?name=${searchKey}`)
//     .then((res) => {
//       setPhotos(res.data[0].photos[0].images);
//       setIsLoading(false);
//       console.log("Photos Result Status: " + res.status);
//       // console.log(axios.defaults.baseURL);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

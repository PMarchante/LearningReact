import axios from "axios";
const KEY = "AIzaSyB33Dc1UeIPu9IxA0vyJ95Bklfn0_xqHjI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

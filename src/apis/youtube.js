import axios from "axios";

const KEY = "AIzaSyCTJT5hGwNscDQoMSn2jQx5z1NzGtkOPEQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

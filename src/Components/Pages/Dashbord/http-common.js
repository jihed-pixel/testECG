import axios from "axios";

export default axios.create({
  baseURL: " https://b5dfde98a5f6.ngrok.io/",
  headers: {
    "Content-type": "application/json"
  }
});

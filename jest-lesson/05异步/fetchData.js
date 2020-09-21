import axios from 'axios'
export const fetchData=(fn)=>{
  axios.get("https://rapi.qingting.fm/recommendations/0/channel_list").then((response) => {
    fn(response.data.Success);
  });
}

export const fetchData2 = () => {
  return axios.get("https://rapi.qingting.fm/recommendations/0/channel_list")
};

export const fetchData3 = () => {
  return axios.get("https://rapi.qingting.fm/recommendations1/0/channel_list");
};
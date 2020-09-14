import axios from 'axios'
export const fetchData=(fn)=>{
    axios.get("https://api.github.com/users/zuobaiquan").then((response) => {
      fn(response.data);
    });
}
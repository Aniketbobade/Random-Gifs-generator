import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const API_KEY='f4kvUZR8CKmStnqhkGwhuALmMLwqmxOt';


const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
 
  const [gif, setGif] = useState("");

  const [loading, setLoading] = useState("false");

  async function featchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ?`${url}&tag=${tag}`:`${url}`);
    const imgUrl = data.data.images.downsized_large.url;
    setGif(imgUrl);
    setLoading(false);
  }

  useEffect(() => {
    featchData('car');
  }, []);


  return {gif,loading,featchData}
}

export default useGif;

import axios from "axios";
import { useState, useEffect } from "react";

const useMovie = (key, URL, DetailURL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(URL, {
          signal: signal,
          params: {
            api_key: key,
          },
        });
        setData(response.data.results);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
    return () => {
      controler.abort();
    };
  }, [DetailURL, URL, key]);

  return { data, loading };
};

export default useMovie;

import { useState, useEffect } from "react";
import axios from "axios";
const useGetData = (url) => {
  const [data, SetMovie] = useState(null);
//   const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          if (!res) {
            throw new Error("could not fecht the data for that resource");
          }
          return res[0]
        })
        .then((data) => {
          SetMovie(data);
        //   setPending(false);
        })
        .catch((err) => {
        //   setPending(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);

  return { data, error };
};

export default useGetData;

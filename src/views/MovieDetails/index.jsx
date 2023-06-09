
import React from "react";
import { useParams } from 'react-router-dom';
import MainLayout from "../../layout/MainLayout";
import { useState, useEffect } from 'react';
import Loading from "../../components/MyLoading";
import axios from "axios";


//components
import MovieDetailImg from "../../components/MovieDetailImg";


const MovieDetail = () => {
  const params = useParams();
  const { movieId } = params;
  const URL = `https://api.themoviedb.org/3/movie/`;
  const moviePost = 'https://www.themoviedb.org/t/p/w440_and_h660_face';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZmZTQ0ZTUwNmZhODVmMzc0ZmFlMTE3ZWQyNmU4MSIsInN1YiI6IjYzMzFmZjA4YjU0MDAyMDA4MjRhZDI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XelLEhTIkZbD7r3kZWilO1Cc7iCjELWw6A2prWWsTgE'
    }
  };

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get(URL + `${movieId}`, options);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [URL, movieId]);

  return (
    <MainLayout>
      <div className="">
        {loading ? (
          <Loading></Loading>
        ) : data ? (
          <div className="" key={data.id}>
            <MovieDetailImg
              poster_path={moviePost + data.poster_path}
              original_title={data.original_title}
              overview={data.overview}
              tagline={data.tagline}
              vote_average={data.vote_average}
              homepage={data.homepage}
            ></MovieDetailImg>
          </div>
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </MainLayout>
  );
};

export default MovieDetail;

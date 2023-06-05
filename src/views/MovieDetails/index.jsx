import MainLayout from "../../layout/MainLayout";
import * as React from 'react';
import {  useParams } from 'react-router-dom';

const MovieDetail = (props) => {
  let movieId = useParams();
  return (
    <MainLayout>
      <h1>adasd</h1>
    </MainLayout>
  );
};

export default MovieDetail;

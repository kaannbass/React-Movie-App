import MainLayout from '../layout/MainLayout';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const key = "c46fe44e506fa85f374fae117ed26e81";
    const URL = `https://api.themoviedb.org/3/movie/popular/`;
    const moviePost = 'https://www.themoviedb.org/t/p/w440_and_h660_face'

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(URL, {
                    api_key: key
                });
                setData(response.data.results);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="">
            <MainLayout>
                <div className="">
                    <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-2">
                        {data.map(item => (
                            <div className="w-full grid-cols-1 md:grid-cols-4" key={item.id}>
                                
                                    <MovieCard
                                        key={item.id}
                                        backdrop_path={moviePost + item.poster_path}
                                        title={item.original_title}
                                        original_language={item.original_language}
                                        date={item.release_date}
                                        body={item.overview}
                                        to={item.id}
                                        popularity={item.popularity}
                                        
                                    />
                               
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default Home;

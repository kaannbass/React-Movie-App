// import MainLayout from '../layout/MainLayout';
import MovieCard from '../components/MovieCard';
import { useState, useEffect, Suspense, lazy } from 'react';
import Loading from '../components/MyLoading';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const MainLayout = lazy(() => import('../layout/MainLayout'))

const Home = () => {

    const key = "c46fe44e506fa85f374fae117ed26e81";
    const URL = `https://api.themoviedb.org/3/movie/popular/`;
    const moviePost = 'https://www.themoviedb.org/t/p/w440_and_h660_face';
    // Movie Detail 
    const DetailURL = `https://api.themoviedb.org/3/movie/`;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await axios.get(URL, {
                    params: {
                        api_key: key
                    }
                });
                console.log(response)
                setData(response.data.results);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };
        fetchData();

    }, [DetailURL, URL]);

    useEffect(() => {
        const storedItems = localStorage.getItem('likedMovies');
        if (storedItems) {
            setLikedMovies(JSON.parse(storedItems));
        }
    }, []);

    const handleLike = (id) => {
        const isLiked = likedMovies.includes(id);
        let updatedLikedMovies = [];

        if (isLiked) {
            updatedLikedMovies = likedMovies.filter((movieId) => movieId !== id);

        } else {
            const movie = data.find((movie) => movie.id === id);

            if (movie.id) {
                updatedLikedMovies = [
                    ...likedMovies,
                    {
                        id: movie.id,
                        title: movie.title,
                        poster_path: movie.poster_path,
                        overview: movie.overview,
                        original_language: movie.original_language,
                        release_date: movie.release_date,
                        vote_average: movie.vote_average,
                    },
                ];
            }
        }
        setLikedMovies(updatedLikedMovies);
        toast.success(`Added Favorite Movie `, localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies)));
    };

    return (
        <div className="">
            <MainLayout>
                <div className="">
                    <Toaster position="top-right" />
                    <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-2">
                        <Suspense fallback={<Loading />}>
                            {loading ? data.map(item => (<Loading key={item.id} />)) :
                                data.map(item => (
                                    <div className="w-full grid-cols-1 md:grid-cols-4" key={item.id}>
                                        <MovieCard
                                            key={item.id}
                                            backdrop_path={moviePost + item.poster_path}
                                            title={item.original_title}
                                            original_language={item.original_language}
                                            date={item.release_date}
                                            body={item.overview}
                                            to={item.id}
                                            vote_average={item.vote_average}
                                            handleLike={handleLike}
                                            isLiked={likedMovies.includes(item.id)}
                                        />
                                    </div>
                                ))}
                        </Suspense>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default Home;

import MainLayout from "../../layout/MainLayout";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const FavoriteMovie = () => {
    const [getItem, SetGetItem] = useState([]);
    const moviePost = 'https://www.themoviedb.org/t/p/w440_and_h660_face';

    useEffect(() => {
        const getStoredItems = () => {
            const storedItems = localStorage.getItem('likedMovies');
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems);
                SetGetItem(parsedItems);
            }
        };

        getStoredItems();
    }, []);


    const handleRemove = (id) => {
        const removeLike = localStorage.getItem("likedMovies", id)
        const parse = JSON.parse(removeLike)
        console.log(parse)
    }


    return (
        <MainLayout>
            <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-2">
                {
                    getItem.map(item => (
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
                                handleLike={handleRemove}
                            />
                        </div>
                    ))}
            </div>
        </MainLayout>
    );
}

export default FavoriteMovie;
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const popularityStyle = props.vote_average > 7 ? 'inline-block bg-green-200 rounded-full w-15 h-15 px-3 py-2 text-sm font-semibold text-green-700 mr-2 mb-2' : 'inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2';
    const isLiked = props.isLiked ? 'h-10 w-10 fill-red-500 text-red-500' : 'h-10 w-10 text-black';

    const handleLike = () => {
        props.handleLike(props.to);
    };

    // const navigate = useNavigate()

    // const nav = (e) => {
    //     let path = window.location.path;
    //     if (path === '/') { navigate('/moviedetail' + e) } else { navigate('/moviedetail' + e) }
    // }

    return (
        <div key={props.id} className="mx-auto mb-2 justify-between hover:shadow-xl w-2/3 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={'moviedetail/' + props.to}>
                <img className="rounded-t-lg" src={props.backdrop_path} alt={props.backdrop_path} />
                <h3 className="mr-2 text-end font-bold tracking-tight text-gray-600 dark:text-white">Language:<span className="text-gray-800"> {props.original_language}</span></h3>
            </Link>
            <div className="p-5">
                <Link to="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </Link>

                <p className="text-gray-700 text-base">
                    Release date: <span className="text-black ">{props.date}</span>
                </p>
                <span className="textAa">{props.body}</span>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-center gap-5">
                <span className={popularityStyle}>{props.vote_average}</span>
                <button onClick={handleLike}>
                    <svg className={isLiked} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default MovieCard;

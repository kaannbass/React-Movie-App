import { Link } from "react-router-dom";


const MovieCard = (props) => {
    let popularityStyle = props.vote_average > 7 ? 'inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2' : 'inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2';
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
                    Release date: {props.date}
                </p>
                <span className="textAa">{props.body}</span>
            </div>

            <div className="px-6 pt-4 pb-2">
                <span className={popularityStyle}>{props.vote_average}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.genres}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.genress}</span>
            </div>
        </div>
    );
}

export default MovieCard;
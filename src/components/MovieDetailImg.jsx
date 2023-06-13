import { Link } from "react-router-dom";


const MovieDetailImg = (props) => {
    return (
        <section className="bg-slate-100 dark:bg-gray-900">
            <div className="min-w-screen min-h-screen flex items-center p-2 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-7xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={props.poster_path} className="w-full h-[45rem] relative rounded" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-3xl mb-5">{props.original_title}</h1>
                                <span className="text-2xl leading-none align-baseline text-gray-500">{props.tagline}</span>
                                <hr />
                                <p className="text-xl mt-7">{props.overview}</p>
                            </div>
                            <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-5"><Link blank to={props.homepage}>Movie Home Page</Link></div>
                            {/* <div>
                                <div className="inline-block align-bottom mr-5">
                                <span className="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"></span>

                                <span className="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"></span>

                                <span className="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"></span>

                                <span className="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"></span>
                                </div>
                               
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </section >


    );
}

export default MovieDetailImg;
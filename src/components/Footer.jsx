import { Link } from "react-router-dom";

const Footer = () => {
    const Links = [
        { id: 1, name: 'Home', to: '/' },
        { id: 2, name: 'Support', to: '/support' },
        { id: 3, name: 'Movie Favorite', to: '/moviefavorite' }
    ]

    function OpenNewWindow(url){
        window.open(url)
    }
    return (

        <div className="bg-white dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center">
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 ml-4 mr-3" alt="Flowbite Logo" />
                    </Link>
                    <ul className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium">
                        {Links.map(filterList => {
                            return (
                                <li key={filterList.id}>
                                    <Link to={filterList.to} key={filterList.id} className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-500" >
                                        {filterList.name}
                                    </Link>
                                </li>
                            )
                        })}


                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link onClick={()=>OpenNewWindow('https://github.com/kaannbass')} className="hover:underline">Kaan™</Link>. All Rights Reserved.</span>
            </div>
        </div>


    );
}

export default Footer;
import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import { useState } from "react";
import { login } from "../../db/firebase";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await login(email, password)
            if (user) {
                login(email, password)
                navigate("/")
            }
        } catch (e) {
            console.log(e.message)

        }
    }


    return (
        <div className="">

            <AuthLayout>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                    <Toaster position="top-right" />
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Log in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={!email || !password ? "flex  cursor-no-drop w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    disabled={!email || !password}
                                >
                                    Log in
                                </button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?
                                <Link
                                    to='/register'
                                    className="text-blue-700 hover:underline dark:text-blue-500 ml-1"
                                >
                                    Create account
                                </Link>
                            </div>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                <span
                                    className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
                                >or</span
                                >
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex space-x-1">
                                    <Link
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <i className="fa-brands fa-google"></i>
                                    </Link>
                                    <Link
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </Link>
                                    <Link
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </AuthLayout >

        </div >
    );
}

export default Login;
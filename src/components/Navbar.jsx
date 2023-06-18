import React, { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { logout } from '../db/firebase';

const Navbar = () => {
    const [user, setUser] = useState(localStorage.getItem('user'))

    const userAuth = (e) => {
        const myJson = JSON.parse(e)
        const userMail = myJson.email
        return userMail;
    }

    const dateFormat = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let dateFormat = day + "/" + month + "/" + year;
        return dateFormat
    }

    const handleLogout = async () => {
        await logout();
        localStorage.removeItem("user");
        setUser(null);
    };


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const Links = {
        regURL: [{ id: 4, name: 'Log In', to: '/login' }, { id: 5, name: 'Register', to: '/register' }],
        basURL: [
            { id: 1, name: 'Home', to: '/' }, { id: 2, name: 'Support', to: '/support' }, { id: 3, name: 'Movie Favorite', to: '/moviefavorite' }
        ]
    }
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {
                        user ? (Links.basURL.map(filterList => {
                            return (
                                <Link to={filterList.to} key={filterList.id} className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-500" >
                                    {filterList.name}
                                </Link>
                            )
                        })) : " "
                    }
                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <button onClick={handleLogout} className="">
                                {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""> */}
                                <div className="font-medium dark:text-white">
                                    <div>{userAuth(user)}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{dateFormat()}</div>
                                </div>
                            </button>
                        </div>


                    ) : (
                        <>
                            {Links.regURL.map((list) => {
                                return (
                                    <Link to={list.to} key={list.id} className='text-md leading-6 block text-center m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                        {list.name} <span className="">&rarr;</span>
                                    </Link>)
                            })}
                        </>
                    )}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to='/' className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    user ? Links.basURL.map((list) => {
                                        return (

                                            <Link to={list.to} key={list.id} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                {list.name}
                                            </Link>)
                                    })
                                        : " "
                                }
                            </div>
                            <div className="py-6">
                                {user ? <button onClick={handleLogout} className="">
                                    <div className=" text-center m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                        <div>{userAuth(user)}</div>
                                        <div className="text-sm text-white">{dateFormat()}</div>
                                    </div>
                                </button> : Links.regURL.map((list) => {
                                    return (
                                        <Link to={list.to} key={list.id} className="text-md leading-6 block text-center m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            {list.name} <span className="">&rarr;</span>
                                        </Link>)
                                })}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    );
}

export default Navbar;
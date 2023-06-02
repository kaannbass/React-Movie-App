import React from 'react';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className="">
            <div className="text-3xl font-bold underline">
                <h1>HOME</h1>
            </div>
           
            <Outlet></Outlet>
        </div>
    );
}

export default Home;
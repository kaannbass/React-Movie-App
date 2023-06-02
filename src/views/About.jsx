import React from 'react';
import { Outlet } from 'react-router';

const About = () => {
    return (
        <div className="">
            <div className="text-3xl font-bold underline">
                <h1>About</h1>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default About;
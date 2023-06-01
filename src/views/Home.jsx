import React from 'react';
import MainLayout from '../layout/MainLayout';
import MyTabs from '../components/Tab';

const Home = () => {
    return (
        <MainLayout>
            <div className="text-3xl font-bold underline">
                <h1>HOME</h1>
                <h1>HOME</h1>
                <h1>HOME</h1>
                <h1>HOME</h1>
            </div>
            <MyTabs></MyTabs>
        </MainLayout>
    );
}

export default Home;
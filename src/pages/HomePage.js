import React from 'react';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';

const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <main className="content">
                <NavBar />
            </main>
        </div>
    );
};

export default HomePage;
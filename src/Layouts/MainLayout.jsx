import React from 'react';
import Navbar from '../components/navbar';

const MainLayout = () => {
    return (
        <div>
           <header>
                <Navbar></Navbar>
           </header>
           <main></main>
        </div>
    );
};

export default MainLayout;
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import RunningCampaigns from '../Components/RunningCampaigns';


const MainLayout = () => {
    return (
        <div>
           <header>
               <Navbar></Navbar>
           </header>
           <main>
                <section>
                    <Banner ></Banner>
                </section>
                <section>
                    <RunningCampaigns></RunningCampaigns>
                </section>
           </main>
           <footer>
                    <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;
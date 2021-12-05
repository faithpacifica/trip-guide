import React from 'react';
import BestPlaces from '../components/BestPlaces/BestPlaces';
import Featured from '../components/Featured/Featured';
import Intro from '../components/Intro/Intro';
import SearchNavbar from '../components/SearchNavbar/SearchNavbar';
import TopTour from '../components/TopTour/TopTour';
import Explore from '../components/ExploreWorld/Explore';
import Trending from '../components/Trending/TrendingCities';
import TravelPassion from '../components/TravelPassion/TravelPassion';
import CTA from '../components/CTA/CTA';


// ****************************************
const Home = () => {
    return (
        <div className = 'home'>
            <Intro />
            <SearchNavbar />
            <BestPlaces />
            <Featured />
            <TopTour />
            <Explore />
            <Trending />
            <TravelPassion />
            <CTA />
        </div>
    );
}

export default Home;

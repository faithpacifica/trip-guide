import React from 'react';
import './trendingcities.css'
import styled from "styled-components";
import TrendingCityCard from '../TrendingCItyCard/TrendingCityCard';

// *****************************************************************
const  TrendingSection = styled.section`
  padding: 60px 35px 25px;
  background-color:${(props) => props.theme.TrendingBg};
`;

const TrendingSectionTitle = styled.h2`
font-family: DM Sans, sans-serif;
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
margin:0;
margin-bottom:16px;
color: ${(props) => props.theme.TrendingH2};
text-align:center;
`;

const TrendingSectionText = styled.p`
font-family: Poppins,sans-serif;
font-size: 24px;
line-height: 24px;
text-align: center;
color:${(props) => props.theme. TrendingCardReview};
margin-bottom:50px;
margin-left:auto;
margin-right:auto;
`

const TrendingCitiesCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
 justify-content:space-around;
  // margin-left: -15px;
  // margin-right: -15px;
`;


// ******************************************************************
const TrendingCities = () => {
    return (
        <TrendingSection className="trending-section">
        <div className="container">
          <TrendingSectionTitle className="trending-section__heading">
          Trending cites
          </TrendingSectionTitle>
          <TrendingSectionText className="trending-section__desc">
          The most searched for cities on TripGuide
          </TrendingSectionText>

          <TrendingCitiesCardWrapper className="trending-cities-card-wrapper">
            <TrendingCityCard />
            <TrendingCityCard />
            <TrendingCityCard />
            <TrendingCityCard />
            <TrendingCityCard />
            <TrendingCityCard />
          </TrendingCitiesCardWrapper>
        </div>
      </TrendingSection>
    );
};

export default TrendingCities;
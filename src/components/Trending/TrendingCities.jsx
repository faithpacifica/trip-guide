import React from 'react';
import './trendingcities.css'
import styled from "styled-components";
import TrendingCityCard from '../TrendingCItyCard/TrendingCityCard';
import { useTranslation } from 'react-i18next';
import apiCalls from "../../config/api";
import { useEffect, useState } from "react";
import Loader from '../Loader';

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
color:${(props) => props.theme.TrendingCardReview};
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

  const {t} = useTranslation();
  const [cities,setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    const getCities = async () => {
      try {
          const data = await apiCalls.getCities();
          setTimeout(() => {
            setIsLoading(false)
          },2000);
          setCities(data);
      } catch (error) {
          setError(error.message);
          setIsLoading(false);
      }
  }
  getCities();
  },[]);

    return (
        <TrendingSection className="trending-section">
        <div className="container">
          <TrendingSectionTitle className="trending-section__heading">
          {t('TrendingTitle')}
          </TrendingSectionTitle>
          <TrendingSectionText className="trending-section__desc">
           {t('TrendingText')}
          </TrendingSectionText>


          { error ?  <p className="error-message">{error}</p> :''}
          {isLoading ? <Loader/> :''}
          {!isLoading && !error ? 

                <TrendingCitiesCardWrapper className="trending-cities-card-wrapper">
                  {
                    cities.map(el => 
                      ( <TrendingCityCard key = {el.id}  citiesobj ={el}/> ) )
                  }
                </TrendingCitiesCardWrapper>
           : ''}
        </div>
      </TrendingSection>
    );
};

export default TrendingCities;
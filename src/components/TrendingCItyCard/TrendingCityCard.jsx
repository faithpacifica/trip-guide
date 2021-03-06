import React from "react";
import "./trendingcitycard.css";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

// *******************************************************************
const TrendingCitiesCard = styled.section`
width:535px;
background-color: ${(props) => props.theme.TrendingCardBg};
border-radius: 20px;
padding:24px;
display:flex;
margin-bottom:35px;
&:hover{
    box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
}
`;

const TrendingCityCardImg= styled.img`
width:160px;
height:168px;
object-fit:cover;
display:block;
border-radius: 16px;
margin-right:30px;
`;

const TrendingCitiesCardTitle = styled.h5`
font-weight: bold;
font-size: 24px;
line-height: 36px;
margin:0;
margin-bottom:12px;
color: ${(props) => props.theme.TrendingCardH};
`;

const Review = styled.span`
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.TrendingCardReview};
margin-bottom:22px;
display:flex;
`;

const IconWrapper = styled.div`
    margin-right:8px;
`;

const Price = styled.p`
font-weight: 600;
font-size: 25px;
line-height: 18px;
color: ${(props) => props.theme.TrendingCardPrice};
margin-bottom:24px;
  small{
    font-size: 18px;
    line-height: 15px;
    color: ${(props) => props.theme.TrendingCardPrice};
  }
`;

const BookNowButton = styled.p`
display:inline-block;
padding:7px 16px;
background-color: #316BFF;
border:none;
border-radius: 6px;
font-weight: bold;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
align-items:center;
`;

// **********************************************************************
const TrendingCityCard = ({ citiesobj }) => {

  const {t} = useTranslation();

  return (
    <TrendingCitiesCard className="trending-cities__card">
      <TrendingCityCardImg
        src={`/assets/img/${citiesobj.photo}`}
        alt={citiesobj.name}
        width="160"
        height="168"
      />

      <div>
        <TrendingCitiesCardTitle>{citiesobj.name}</TrendingCitiesCardTitle>
        <Review>
          <IconWrapper>
            <AiFillStar  className='star' style={{ color: "#FFD166", fontSize: "16px" }} />
          </IconWrapper>
         {citiesobj.rating}
        </Review>
        <Price>
             $ <span>{citiesobj.price}<small>/{t('NIGHT')}</small></span>
        </Price>
        <BookNowButton>{t('booknow')}</BookNowButton>

      </div>
    </TrendingCitiesCard>
  );
};

export default TrendingCityCard;

import React from "react";
import "./bestplaces.css";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

// ********************************************************
const PlacesBest = styled.section`
  margin-top: -215px;
  padding: 150px 0  41px 0;
  background-color:${(props) => props.theme.ExploreWorldBg}
`;

const PlacesBestTitle = styled.h2`
font-family: DM Sans, sans-serif;
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
margin:0;
margin-bottom:12px;
color:${(props) => props.theme.ExploreWorldTitle};
text-align:center;
`;

const PlacesBestText = styled.p`
font-family: Poppins,sans-serif;
width:593px;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${(props) => props.theme.TrendingText};
margin-bottom:65px;
margin-left:auto;
margin-right:auto;
`

const PlacesCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
 justify-content:space-between;
  margin-left: -15px;
  margin-right: -15px;
`;

const PlacesCard = styled.div`
border: 1px solid #E7ECF3;
border-radius: 10px;
width:270px;
height:202px;
padding:30px  30px 25px;
margin-bottom:30px;
// margin-left:15px;
margin-right:15px;
&:hover{
    pointer:cursor;
    background-color: ${(props) => props.theme.BestCardHoverBg};
    box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
}
&:active{
    background-color: lightgrey;
}
`;

const PlacesCardImg = styled.img`
    width:70px;
    height:70px;
    object-fit:contain;
    display:block;
    margin-bottom:18px;
`;

const PlacesCardTitle = styled.h6`
font-family: DM Sans, sans-serif;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color:${(props) => props.theme.PlacesCardTitle} ;
margin:0;
margin-bottom:12px;
`;

const PlacesCardText = styled.span`
font-family: DM Sans,sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.PlacesCardText};
margin:0;
`;

// *************************************************************
const BestPlaces = () => {

  const {t} = useTranslation();

  return (
    <PlacesBest className="places-best">
      <div className="container">
        <PlacesBestTitle className="places-best__heading">
        {t('BestTitle')}
        </PlacesBestTitle>
        <PlacesBestText className="places-best__desc">
        {t('BestText')}
        </PlacesBestText>

        <PlacesCardWrapper className="PlacesCard-wrapper">
        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-1.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Batu, East Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span>  {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-2.png" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Kuta</PlacesCardTitle>
           <PlacesCardText><span>86 </span>  {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-3.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Surabaya, East Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span> {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-4.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Malang, East Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span> {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-5.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Dieng, Central Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span>  {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-6.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Nusa Dua, Lombok</PlacesCardTitle>
           <PlacesCardText><span>86 </span>  {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-7.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Bandung, West Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span> {t('destinations')}</PlacesCardText>
        </PlacesCard>

        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-8.jpg" alt="city" width= '70' height = '70' />
           <PlacesCardTitle>Wakatobi, Sumatera</PlacesCardTitle>
           <PlacesCardText><span>86 </span>  {t('destinations')}</PlacesCardText>
        </PlacesCard>

        </PlacesCardWrapper>
      </div>
    </PlacesBest>
  );
};

export default BestPlaces;

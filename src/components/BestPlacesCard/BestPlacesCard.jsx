import React from 'react';
import styled from 'styled-components';


// *******************************************************
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


// **********************************************************
const BestPlacesCard = () => {
    return (
        <PlacesCard className= 'places-card'>
           <PlacesCardImg src="../../../assets/img/best-1.jpg" alt="city image" width= '70' height = '70' />
           <PlacesCardTitle>Batu, East Java</PlacesCardTitle>
           <PlacesCardText><span>86 </span> Destinations</PlacesCardText>
        </PlacesCard>
    );
};

export default BestPlacesCard;
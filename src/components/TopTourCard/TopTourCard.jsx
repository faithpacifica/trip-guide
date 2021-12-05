import React from 'react';
import './toptourcard.css';
import styled from 'styled-components';

// ****************************************************************
const TourTopCard = styled.div`
overflow: hidden;
border-radius: 20px;
// margin-bottom:30px;
margin-left:15px;
margin-right:15px;
position:relative;

&:hover{
    pointer:cursor;
    box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
}
    button{
        position:absolute;
        font-family: DM Sans,sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        backdrop-filter: blur(4px);
        border-radius: 50px;
        color: #E9EBF3;
        padding:12px 27px;
        top:30px;
        left:35px;
        border:none;
        background-color: rgba(20, 20, 22, 0.2);
    }

`;
const Shadow = styled.div`
    background-image: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
    z-index:5px;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
`;

const TourTopContent = styled.div`
        position:absolute;
        left:35px;
        bottom:35px;
        z-index:10;
`;

const TourTopImg = styled.img`
    border-radius: 20px
    width:370px;
    height:495px;
    object-fit:contain;
    display:block;
    z-index:1;
`;

const TourTopTitle = styled.h6`
font-family: DM Sans, sans-serif;
font-weight: bold;
font-size: 34px;
line-height: 44px;
color:  #FCFCFD;
margin:0;
margin-bottom:8px;
text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
`;

const TourTopText = styled.h6`
font-family: Poppins,sans-serif;
font-size: 16px;
line-height: 24px;
color: #FCFCFD;
margin:0;
`;


// ************************************************************************
const TopTourCard = () => {
    return (
        <TourTopCard className= 'top-tour__card'>
        <TourTopImg src="../../../assets/toptour-1.jpg" alt="city image" width= '370' height = '495' />
        <Shadow></Shadow>
        <button type='button'>Japan</button>
        <TourTopContent>
            <TourTopTitle>Japan</TourTopTitle>
            <TourTopText><span> 10  </span>Popular Places</TourTopText>
        </TourTopContent>

     </TourTopCard>
    );
};

export default TopTourCard;
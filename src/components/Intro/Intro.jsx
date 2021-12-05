import React from 'react';
import { useTranslation } from 'react-i18next';
import './intro.css';
import styled from "styled-components";


// ******************************************************
const IntroSection = styled.section`
background-image:url(../../assets/intro-bg.jpg);
background-repeat:no-repeat;
background-position:center center;
background-size:cover;
width:100%;
background-color: linear-gradient(110.89deg, rgba(207, 241, 255, 0.8) 30.76%, rgba(255, 255, 255, 0) 63.61%);
`;

const IntroHeading = styled.h1`
width:550px;
font-family: Poppins, sans-serif;
font-weight: bold;
font-size: 64px;
line-height: 80px;
letter-spacing: -0.005em;
color: #3B3E44;
padding-top:141px;
padding-bottom:200px;
`;

// **************************************************
const Intro = () => {
const {t} = useTranslation();

    return (
        <IntroSection className = 'intro'>
            <div className="container">
                <IntroHeading className="intro-heading">
                    {/* Book With Us And Enjoy your Journey ! */}
                    {t('introTitle')}
                </IntroHeading>
            </div>

        </IntroSection>
    );
};

export default Intro;
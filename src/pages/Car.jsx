import React from 'react';
import CTA from '../components/CTA/CTA';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
// *************************************************************
const CarSection = styled.div`
padding-top:150px;
  margin:0 auto;
  font-size:60px;
  color:#316BFF;
  text-align: center;
  text-align: center;
 background-color:#f4f5f6;
`;


// **************************************************************
const Car = () => {
    const {t} = useTranslation();
    return (
        <CarSection>
            {t('carPage')}
           
           <CTA/>
        </CarSection>
    );
};

export default Car;
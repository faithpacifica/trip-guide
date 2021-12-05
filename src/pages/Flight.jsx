import React from 'react';
import CTA from '../components/CTA/CTA';
import styled from "styled-components";

// ***********************************************************
const FLightSection = styled.div`
padding-top:150px;
  margin:0 auto;
  font-size:60px;
  color:#316BFF;
  text-align: center;
 background-color:#f4f5f6;
`;


// ****************************************************************
const Flight = () => {
    return (
        <FLightSection>
            This is Flight Page
            <CTA/>
        </FLightSection>
    );
};

export default Flight;
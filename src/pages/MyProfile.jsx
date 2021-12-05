import React from 'react';
import CTA from '../components/CTA/CTA';
import styled from "styled-components";

// **********************************************
const Profile = styled.div`
padding-top:150px;
  margin:0 auto;
  font-size:60px;
  color:#316BFF;
  text-align: center;
 background-color:#f4f5f6;
`;

// **********************************************
const MyProfile = () => {
    return (
        <Profile>
            This is My Profile Page
            <CTA/>
        </Profile>
    );
};

export default MyProfile;
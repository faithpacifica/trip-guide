import React from "react";
import "./bestplaces.css";
import styled from "styled-components";
import BestPlacesCard from "../BestPlacesCard/BestPlacesCard";


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


// *************************************************************
const BestPlaces = () => {
  return (
    <PlacesBest className="places-best">
      <div className="container">
        <PlacesBestTitle className="places-best__heading">
          Search a best place in the world
        </PlacesBestTitle>
        <PlacesBestText className="places-best__desc">
          Whether you’re looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </PlacesBestText>

        <PlacesCardWrapper className="PlacesCard-wrapper">
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
          <BestPlacesCard />
        </PlacesCardWrapper>
      </div>
    </PlacesBest>
  );
};

export default BestPlaces;

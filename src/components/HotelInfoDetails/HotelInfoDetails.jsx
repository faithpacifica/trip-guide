import React from "react";
import "./hotelinfodetails.css";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReactStars from "react-rating-stars-component";
import { AiOutlineWifi } from "react-icons/ai";
import { AiOutlineHeatMap } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { RiHotelBedLine } from "react-icons/ri";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineLaptop } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

// ***************************************************

const HotelLocation = styled.div`
    // margin-right:90px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color:${(props) => props.theme.HotelLocation} ;
    margin-bottom:30px;
    border-bottom:5px solid {${(props) => props.theme.LocationBorder}
`;

const TagsAndReview = styled.div`
  padding: 0px 0 20px 0;
  height: 26px;
  display: flex;
  justify-content: start;
  align-items: center;

  button {
    margin-right: 18px;
    display: block;
    border-radius: 5px;
    font-size: 14px;
    line-height: 21px;
    padding: 2.5px 0 2.5px 0;
    border-radius: 5px;
    border: none;
    &:nth-child(1) {
      color: #38b345;
      padding: 0 5.5px 0 5.5px;
      background-color: rgba(56, 179, 69, 0.1);
    }
    &:nth-child(2) {
      color: #fd9704;
      border-radius: 5px;
      padding: 0 8.5px 0 8.5px;
      background-color: rgba(253, 151, 4, 0.1);
    }
    &:nth-child(3) {
      color: #0b3ba7;
      padding: 0 15.5px 0 15.5px;
      background-color: rgba(234, 238, 250, 0.9);
    }
    &:nth-child(4) {
      color: #e96594;
      padding: 0 20px 0 20px;
      background-color: rgba(252, 235, 241, 0.9);
    }
    &:nth-child(5) {
      color: #dc6e3d;
      padding: 0 18px 0 18px;
      background-color: rgba(251, 238, 232, 0.9);
    }
  }
`;
const StarReview = styled.div`
  // padding-top: 20px;
`;

const SingleHotelInfoTitle = styled.h3`
  margin: 0;
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.SingleHotelInfoTitle};
`;

const SingleHotelInfo = styled.div`
  width: 742px;
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.SingleHotelInfoTitle};
  margin-bottom: 30px;
`;

const TabContent = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #353945;
  margin-bottom: 40px;
`;

const HotelFeatures = styled.h5`
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.FeatureDetailsTitle};
  margin-bottom: 24px;
  margin-top: 40px;
`;

const FeatureDetail = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.WifiIconColor};
  margin-right: 50px;
  span {
    color: #4f4f4f;
  }
`;
const FeaturesType = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 62px;
`;

const Amenities = styled.h5`
margin: 0;
margin-bottom: 28px;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #23262f;
`;

const AmenityDetails = styled.div`
display: flex;
margin-bottom: 60px;
`;
const Left = styled.div`
margin-right: 190px;
`;
const Right = styled.div``;

const AmenityType = styled.div`
margin-bottom: 26px;
display: flex;
align-items: center;
span {
  font-size: 16px;
  line-height: 24px;
  color: #353945;
}
`;

const MoreDetailsButton = styled.button`
border: none;
padding: 11px 31px;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #ffffff;
background-color: #3b71fe;
border-radius: 47px;
`;


// *****************************************************
const HotelInfoDetails = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <SingleHotelInfo>
        <TagsAndReview>
          <Button variant="">5.0</Button>
          <Button variant="">Perfect</Button>
          <Button variant="">Hotels</Button>
          <Button variant="">Building</Button>
          <Button variant="">Top value</Button>
          <StarReview>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />
          </StarReview>
        </TagsAndReview>

        <SingleHotelInfoTitle>Exclusive room in house</SingleHotelInfoTitle>
        <HotelLocation>Zuich, Switzerland</HotelLocation>
        <Hr />
        <Tabs
          defaultActiveKey="Description"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab className="active" eventKey="Description" title="Description">
            Arabian Park Hotel is a great choice for travellers looking for a 3
            star hotel in Dubai. It is located in Bur Dubai. This Hotel stands
            out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2
            kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and
            Jumeirah Public Beach (15.8 kms).
          </Tab>
          <Tab eventKey="Features" title="Features"></Tab>
          <Tab eventKey="Room & Price" title="Room & Price"></Tab>
          <Tab eventKey="Review" title="Review"></Tab>
        </Tabs>

        <HotelFeatures>Hotel Features</HotelFeatures>

        <FeaturesType>
          <FeatureDetail>
            <AiOutlineWifi
              style={{
                color: "rgba(177,181,195,1)",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>Wi-fi</span>
          </FeatureDetail>

          <FeatureDetail>
            <FaBath
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span> Bathtub</span>
          </FeatureDetail>

          <FeatureDetail>
            <ImSpoonKnife
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>Breakfast</span>
          </FeatureDetail>

          <FeatureDetail>
            <RiHotelBedLine
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>Kings bed</span>
          </FeatureDetail>

          <FeatureDetail>
            <TiArrowSync
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>4m x 6m</span>
          </FeatureDetail>
        </FeaturesType>
        <Hr />

        <Amenities>Amenities</Amenities>
        <AmenityDetails>
          <Left>
            <AmenityType>
              <AiOutlineWifi
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span> Free wifi 24/7</span>
            </AmenityType>

            <AmenityType>
              <AiOutlineLaptop
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>Free computer</span>
            </AmenityType>

            <AmenityType>
              <GrPersonalComputer
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>Free wifi 24/7</span>
            </AmenityType>

            <AmenityType>
              <RiComputerLine
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>Free wifi 24/7</span>
            </AmenityType>
          </Left>

          <Right>
            <AmenityType>
              <FaBath
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span> Free clean bathroom</span>
            </AmenityType>

            <AmenityType>
              <FaPizzaSlice
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>Breakfast included</span>
            </AmenityType>

            <AmenityType>
              <AiOutlineHeatMap
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>ATM</span>
            </AmenityType>

            <AmenityType>
              <FaRegBuilding
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>Nearby city</span>
            </AmenityType>
          </Right>
        </AmenityDetails>

        <MoreDetailsButton>More details</MoreDetailsButton>
      </SingleHotelInfo>
    </>
  );
};

export default HotelInfoDetails;

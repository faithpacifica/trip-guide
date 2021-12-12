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
import { RiComputerLine } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


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
      padding: 2px 7.5px 2px 7.5px;
      background-color:${(props) => props.theme.detailButtonbg1} ;
    }
    &:nth-child(2) {
      color: #fd9704;
      border-radius: 5px;
      padding: 2px 8.5px 2px 8.5px;
      background-color:${(props) => props.theme.detailButtonbg2}  ;
    }
    &:nth-child(3) {
      color: #0b3ba7;
      padding: 2px 15.5px 2px 15.5px;
      background-color:${(props) => props.theme.detailButtonbg3} ;
    }
    &:nth-child(4) {
      color: #e96594;
      padding: 2px 20px 2px 20px;
      background-color: ${(props) => props.theme.detailButtonbg4} ;
    }
    &:nth-child(5) {
      color: #dc6e3d;
      padding: 2px 18px 2px 18px;
      background-color:${(props) => props.theme.detailButtonbg5}  ;
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
    color: ${(props) => props.theme.iconText};
    
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
color: ${(props) => props.theme.FeatureDetailsTitle};
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
  color: ${(props) => props.theme.iconText};
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

const TabStyleWrapper = styled.div`
.nav-item .nav-link .active{
  color:  #145CE6;
}
.nav-item .nav-link {
  /* color: #23262F; */
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.nav-link.active{
  color: ${(props) => props.theme.tabPaneTitle};
}

.nav-tabs .nav-link{
  position:relative;
  background-color: none !important;
  border-color: none !important;
  color: ${(props) => props.theme.FeatureDetailsTitle};

}
.nav-tabs .nav-link.active{
  color: ${(props) => props.theme.tabPaneTitle};
  background: none !important;
  border: none !important;
  transition:all 0.4s ease;
  &:after{
    content:'';
    position:absolute;
    top:40px;
    left:0;
    height:2px;
    background: ${(props) => props.theme.tabPaneTitle};
    width:100%;
    
  }
}
.nav-tabs {
 padding-bottom:15px;
  border-bottom: 1px solid #84878b;
}

.tab-content .tab-pane {
  color: ${(props) => props.theme.tabPaneColor} 
}
`;

// *****************************************************
const HotelInfoDetails = ({prop}) => {

  const {t} = useTranslation();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <SingleHotelInfo>
        <TagsAndReview>
          <Button variant="">{prop.rating}</Button>
          <Button variant="">{t('perfect')}</Button>
          <Button variant="">{t('label-hotel')}</Button>
          <Button variant="">{t('Building')}</Button>
          <Button variant="">{t('topValue')}</Button>
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

        <SingleHotelInfoTitle>{t('exlusiveTitle')}</SingleHotelInfoTitle>
        <HotelLocation>{prop.location}</HotelLocation>
        <Hr />
        <TabStyleWrapper>
         <Tabs
          defaultActiveKey="Description"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          {/* TODO:Tabni oq-qorasini tugirlash */}
          <Tab className="active" eventKey="Description" title={t('description')}>
            Arabian Park Hotel is a great choice for travellers looking for a 3
            star hotel in Dubai. It is located in Bur Dubai. This Hotel stands
            out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2
            kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and
            Jumeirah Public Beach (15.8 kms).
          </Tab>
          <Tab eventKey="Features" title= {t('features')}></Tab>
          <Tab eventKey="Room & Price" title= {t('roomAndprice')}></Tab>
          <Tab eventKey="Review" title= {t('review')}></Tab>
        </Tabs>
        </TabStyleWrapper>


        <HotelFeatures>{t('hotel-features')}</HotelFeatures>

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
            <span> {t('bathup')}</span>
          </FeatureDetail>

          <FeatureDetail>
            <ImSpoonKnife
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>{t('breakfast')}</span>
          </FeatureDetail>

          <FeatureDetail>
            <RiHotelBedLine
              style={{
                color: "#4F4F4F",
                marginRight: "10px",
                fontSize: "22px",
              }}
            />
            <span>{t('kinsbed')}</span>
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

        <Amenities>{t('amenities')}</Amenities>
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
              <span> {t('freewifi')} 24/7</span>
            </AmenityType>

            <AmenityType>
              <AiOutlineLaptop
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>{t('freeComp')}</span>
            </AmenityType>

            <AmenityType>
              <AiOutlineLaptop
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>{t('freewifi')}  24/7</span>
            </AmenityType>

            <AmenityType>
              <RiComputerLine
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>{t('freewifi')} 24/7</span>
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
              <span>{t('freeBathroom')} </span>
            </AmenityType>

            <AmenityType>
              <FaPizzaSlice
                style={{
                  color: "#353945",
                  marginRight: "10px",
                  fontSize: "22px",
                }}
              />
              <span>{t('breakfastIncluded')}</span>
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
              <span>{t('nearby')}</span>
            </AmenityType>
          </Right>
        </AmenityDetails>

        <MoreDetailsButton>{t('moredatails')}</MoreDetailsButton>
      </SingleHotelInfo>
    </>
  );
};

export default HotelInfoDetails;

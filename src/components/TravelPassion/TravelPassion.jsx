import React from "react";
import "./travelpassion.css";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
// import { useContext } from "react";
// import { ThemeContext } from "styled-components";
import { useTranslation } from 'react-i18next';


// **************************************************************
const TravelPassionSection = styled.section`
  padding:  70px 0 300px 0;
  margin-bottom: -355px;
  background-color:${(props) => props.theme.PassionBg};
`;

const TravelPassionTitle = styled.h2`
  font-family: DM Sans, sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.Footerh4};
  margin: 0;
  margin-bottom: 12px;
`;

const TravelPassionText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
  margin-bottom: 42px;
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content:space-between;
`;

const ImgWrapper = styled.div`
  position: relative;
  z-index:0;
   :before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background-image: linear-gradient(6.66deg, rgba(0, 0, 0, 0.22) 15.51%, rgba(133, 118, 173, 0) 42.28%, rgba(20, 21, 31, 0) 42.28%);
      z-index:3;
      border-radius: 15px;
 }
  div {
    z-index:5;
    left: 30px;
    bottom: 18px;
    position: absolute;
    color: white;
    h4 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 8px;
    }
  }
`;

const Img = styled.img`
  max-width: 270px;
  height: 323px;
  display: flex;
  object-fit:cover;
border-radius: 15px;
`;

const Review = styled.span`
font-size: 14px;
line-height: 21px;
color: #fff;
// margin-bottom:22px;
display:flex;
align-items:center;
`;


// ****************************************************************
const TravelPassion = () => {
  const {t} = useTranslation();

  return (
    <TravelPassionSection className="travel-passion__section">
      <div className="container">
        <TravelPassionTitle className="places-best__heading">
           {t('introTitle')}
        </TravelPassionTitle>
        <TravelPassionText className="places-best__desc">
        {t('passionText')}
        </TravelPassionText>

        <GridWrapper className="grid-wrapper">
          <ImgWrapper>
            <Img src="../../../assets/img/passion-1.jpg" alt="city pic" width ='270' height='323' />
            <div>
              <h4> {t('beachHobby')}</h4>
              <Review>
                 <AiFillStar className='star' style={{ color: "#FFD166", fontSize: "16px", display:'block', marginRight:'12px'}} />
                <span> 4.8 (122 reviews)</span>
              </Review>
            </div>
          </ImgWrapper>

          <ImgWrapper>
            <Img src="../../../assets/img/passion-2.jpg" alt="city pic" width ='270' height='323' />
            <div>
              <h4> {t('cityTour')}</h4>
              <Review>
                 <AiFillStar className='star' style={{ color: "#FFD166", fontSize: "16px", display:'block', marginRight:'12px'}} />
                <span> 4.8 (122 reviews)</span>
              </Review>
            </div>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="../../../assets/img/passion-3.jpg" alt="city pic" width ='270' height='323' />
            <div>
              <h4>{t('hikingTrips')}</h4>
              <Review>
                 <AiFillStar  className='star' style={{ color: "#FFD166", fontSize: "16px", display:'block', marginRight:'12px'}} />
                <span> 4.8 (122 reviews)</span>
              </Review>
            </div>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="../../../assets/img/passion-4.jpg" alt="city pic" width ='270' height='323' />
            <div>
              <h4>{t('sportsTrips')}</h4>
              <Review>
                 <AiFillStar className='star' style={{ color: "#FFD166", fontSize: "16px", display:'block', marginRight:'12px'}} />
                <span> 4.8 (122 reviews)</span>
              </Review>
            </div>
          </ImgWrapper>

        </GridWrapper>
     </div>
    </TravelPassionSection>
  );
};

export default TravelPassion;

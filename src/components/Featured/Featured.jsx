import React from "react";
import "./featured.css";
import styled from "styled-components";


// ************************************************************
const FeaturedSection = styled.section`
  padding:0;
  background-color:${(props) => props.theme.ExploreWorldBg}
`;

const FeaturedTitle = styled.h2`
  font-family: DM Sans, sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  color:${(props) => props.theme.ExploreWorldTitle};
  margin: 0;
  margin-bottom: 12px;
`;

const FeaturedText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color:${(props) => props.theme.TrendingText};
  margin-bottom: 37px;
`;

const GridWrapper = styled.div`
  display: flex;
  div{
    z-index:100;
  }
  img{
    border-radius:20px;
  }
`;

const GridWrapperLeft = styled.div`
  margin-right: 30px;
  border-radius: 18px;
`;

const GridWrapperRight = styled.div`
  // width: 270px;
`;


const LeftTopBox = styled.div`
  position:relative;
  max-width: 870px;
  height: 280px;
  margin-bottom: 30px;
    &:after{
      border-radius: 18px;
      content:'';
      bottom:0;
      left:0;
      right:0;
      top:0;
      position:absolute;
      background-image: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
    }

      button{
        z-index:600px;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #FF543D;
        background-color:white;
        padding:2px 19px;
        box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
        border-radius: 20px;
        border:none;
        position:absolute;
        top:22px;
        left:20px;
      }
      div{
        z-index:300px;
        left:30px;
        bottom:15px;
        position:absolute;
        color:white;
        img{
          border-radius:50%;
        }
        h4{
          font-weight: bold;
          font-size: 40px;
          line-height: 24px;
          margin-bottom:20px;
        }
        p{
          font-size: 20px;
          line-height: 30px;
        }
      }
`;
const LeftBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

`;

const SemiImgWrapper = styled.div`
    position:relative;
    &:after{
      border-radius: 18px;
      content:'';
      bottom:0;
      left:0;
      right:0;
      top:0;
      position:absolute;
      background-image: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
    }
    button{
      z-index:300px;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #FF543D;
      background-color:white;
      padding:2px 19px;
      box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
      border-radius: 20px;
      border:none;
      position:absolute;
      top:22px;
      left:20px;
    }
    div{
      z-index:300px;
      left:30px;
      bottom:20px;
      position:absolute;
      color:white;
      img{
        border-radius:50%;
      }
      h4{
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        margin-bottom:12px;
      }
      p{
        margin:0;
        font-size: 14px;
        line-height: 21px;
      }
    }
`;
const SmallImgWrapper = styled.div`
    position:relative;
    &:after{
      border-radius: 18px;
      content:'';
      bottom:0;
      left:0;
      right:0;
      top:0;
      position:absolute;
      background-image: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
    }
    button{
      z-index:300px;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #FF543D;
      background-color:white;
      padding:2px 19px;
      box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
      border-radius: 20px;
      border:none;
      position:absolute;
      top:22px;
      left:20px;
    }
    div{
      z-index:300px;
      left:20px;
      bottom:20px;
      position:absolute;
      color:white;
      img{
        border-radius:50%;
      }
      h4{
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        margin-bottom:6px;
      }
      p{
        margin:0;
        font-size: 10px;
        line-height: 15px;
      }
    }
`;

const SmallImg = styled.img`
  max-width: 270px;
  height: 220px;
  display: flex;
  margin-bottom: 30px;
`;

const SemiImg = styled.img`
  width: 408px;
  height: 408px;
`;


// ******************************************************
const Featured = () => {
  return (
    <FeaturedSection className="featured">
      <div className="container">
        <FeaturedTitle className="places-best__heading">
          Featured Destinations
        </FeaturedTitle>
        <FeaturedText className="places-best__desc">
          Popular destinations open to visitors from Indonesia
        </FeaturedText>


        <GridWrapper className="grid-wrapper">
          <GridWrapperLeft className="grid-wrapper__left">
            <LeftTopBox className="grid-wrapper__left__top">
              <img src="../../../assets/feat-long.jpg" alt="city pic" />
              {/* <Shadow></Shadow> */}
              <button>3.5</button>
              <div>
              <h4>Barcelona Tour</h4>
              <p><img src='../../../assets/avatar-1.jpg' /> 196 Activities</p>
              </div>

            </LeftTopBox>

            <LeftBottomBox className="grid-wrapper__left__bottom">
              <SemiImgWrapper >
                <SemiImg src="../../../assets/feat-semi-1.jpg" alt="city pic" />
                <button>3.5</button>
                <div>
                <h4>London, United State</h4>
                <p><img src='../../../assets/avatar-2.jpg' /> 196 Activities</p>
                </div>
              </SemiImgWrapper>

              <SemiImgWrapper>
             <SemiImg src="../../../assets/feat-semi-2.jpg" alt="city pic" />
              <button>3.5</button>
              <div>
              <h4>Australia Tour</h4>
              <p><img src='../../../assets/avatar-2.jpg' /> 196 Activities</p>
              </div>
              </SemiImgWrapper>

            </LeftBottomBox>
          </GridWrapperLeft>

          <GridWrapperRight className="grid-wrapper__right">
            <SmallImgWrapper>
              <SmallImg src="../../../assets/feat-small-1.jpg" alt="city pic" />
              <button>3.5</button>
              <div>
              <h4>Australia Tour</h4>
              <p><img src='../../../assets/avatar-2.jpg' /> 196 Activities</p>
              </div>
            </SmallImgWrapper>

            <SmallImgWrapper>
              <SmallImg src="../../../assets/feat-small-2.jpg" alt="city pic" />
              <button>3.5</button>
              <div>
              <h4>Japan Tour</h4>
              <p><img src='../../../assets/avatar-2.jpg' /> 196 Activities</p>
              </div>
            </SmallImgWrapper>

            <SmallImgWrapper>
              <SmallImg src="../../../assets/feat-small-3.jpg" alt="city pic" />
              <button>3.5</button>
              <div>
              <h4>Japan Tour</h4>
              <p><img src='../../../assets/avatar-2.jpg' /> 196 Activities</p>
              </div>
            </SmallImgWrapper>
          </GridWrapperRight>
        </GridWrapper>

      </div>
    </FeaturedSection>
  );
};

export default Featured;

import React from "react";
import styled from "styled-components";
import { MdOutlinePinDrop } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

// ****************************************************************
const ExploreWorldCard = styled.section`
// margin-left:15px;
// margin-right:15px;
background-color:${(props) => props.theme.ExploreWorldCard};
border: 1px solid #E7ECF3;
border-radius: 20px;
padding:14px;
&:hover{
    box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
}
&:active{
  background-color: #E3E3E3;
}
`;

const ExploreWorldCardImg= styled.img`
width:242px;
height:152px;
object-fit:cover;
display:block;
margin-bottom:20px;
border-radius: 16px;
`;

const ExploreContent = styled.div`
display:flex;
flex-direction:column;
`;

const Review = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme. TrendingCardReview};
display:flex;
align-items:center;
margin-bottom:15px;
`;

const ContentInnerDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:start;
`;

const ExploreWorldTitle = styled.h5`
font-weight: bold;
font-size: 20px;
line-height: 26px;
margin:0;
margin-bottom:9px;
color:${(props) => props.theme.ExploreCardTitle};
`;

const ExploreWorldCardText  = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
margin:0;
margin-bottom:15px;
color: #84878B;
`;

const ExploreLocation = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
margin:0;
margin-bottom:8px;
color: ${(props) => props.theme. TrendingCardReview};
display:flex;
align-items:center;
`;

const Rooms = styled.p`
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme. TrendingCardReview};
display:flex;
align-items:center;
`;

const Price = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 23px;
padding:3px 10px;
color: #316BFF;
background: rgba(49, 107, 255, 0.2);
border-radius: 6px;
`;

const IconWrapper = styled.div`
    margin-right:9px;
`

// ****************************************************************
const ExploreCard = () => {
  return (
    <ExploreWorldCard className="explore-card">
      <ExploreWorldCardImg
        src="../../../assets/explore-1.jpg"
        alt="city image"
        width="242"
        height="152"
      />
      <ExploreContent>
        <Review>
            <IconWrapper><AiFillStar style = {{color: '#FFD166', fontSize:'16px'}} /></IconWrapper>4.91 (147)
        </Review>
        <ContentInnerDiv>
          <div>
            <ExploreWorldTitle>Comfort Space</ExploreWorldTitle>
            <ExploreWorldCardText>
              <span>1.2 </span> km to Town Center
            </ExploreWorldCardText>
            <ExploreLocation>
                <IconWrapper><MdOutlinePinDrop style = {{color: '#B1B5C4', fontSize:'18px'}} /></IconWrapper>Turkey, Mamaris
            </ExploreLocation>
            <Rooms>
                <IconWrapper><HiOutlineOfficeBuilding style = {{color: '#B1B5C4', fontSize:'18px'}}/></IconWrapper>Rooms available: 375
            </Rooms>
          </div>
          <div>
            <Price>
              $<span>210</span>
            </Price>
          </div>
        </ContentInnerDiv>
      </ExploreContent>
    </ExploreWorldCard>
  );
};

export default ExploreCard;

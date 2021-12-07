import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";


// *********************************************

const FareSummarySection = styled.section`
  max-width: 445px;
  width: 100%;
  background-color: white;
  padding: 40px 35px 36px;
  color: #353945;
  border: 1px solid #e7ecf3;
  border-radius: 20px;
`;

const SectionTitle = styled.h4`
  margin: 0;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.DetailsTitle};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-right: 8px;
  span {
    display: inline-block;
    color: #84878b;
  }
`;

const StarWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 21px;
  span {
    display: block;
    color: ${(props) => props.theme.ListCardReview};
    font-weight: bold;
  }
  small {
    color: #84878b;
    font-weight: normal;
  }
`;

const Image = styled.img`
  width: 326px;
  height: 177px;
  object-fit: cover;
  margin-bottom: 24px;
`;
const Accomodation = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
`;

const Hr = styled.hr`
  width: 185px;
  border: 1px solid #eeeeee;
  margin-bottom: 21px;
`;

const FinalConfirmation = styled.div`
  margin-bottom:40px;
`;
const FinalCheckInOut = styled.div`
  display:flex;
  justify-content:start;
  margin-bottom:21px;
    div:nth-child(1){
      margin-right:86px;
      border-left:2px solid #F4F5F6;
    }
`;
const P = styled.p`
  margin:0;
  margin-bottom:2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #B1B5C4;
`;
const Div = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`;

const BookedDetailsTitle = styled.h3`
margin:0;
margin-bottom:40px;
font-family: Roboto,sans-serif;
font-weight: 500;
font-size: 26px;
line-height: 27px;
color: #333333;
`;
const BookedDetailsField = styled.div`
    margin-bottom:30px;
`;
const DetailsFields = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;
`;
const BookedService = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`;
const DetailsFieldsAmount = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #353945;
`;
const Guests = styled.div``;
const FinalTotalAmount = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:30px;
  padding:7.5px 12px;
  background-color: #F4F5F6;
  border-radius: 6px;
`;

const Total = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #23262F;
`;

const Report = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
text-align:center;

`;
// *****************************************
const FareSummary = () => {
  return (
    <FareSummarySection>
      <h6>Switzerland Hotels and Places to Stay </h6>

      <StarWrapper>
        <IconWrapper>
          <AiFillStar style={{ color: "#FFC542", fontSize: "16px" }} />
        </IconWrapper>
        <span>
          4.8 <small>(122 reviews)</small>{" "}
        </span>
      </StarWrapper>

      <Image src="../../assets/img/swizerland.jpg" alt="city image" />

      <Accomodation>1 bedroom + 1 private room</Accomodation>

      <Hr />

      <FinalConfirmation>
        <FinalCheckInOut>
          <div>
            <P>Check in</P>
            <Div>June 27, 2020 </Div>
          </div>
          <div>
            <P>Check out</P>
            <Div>June 30, 2020 </Div>
          </div>
        </FinalCheckInOut>

        <Guests>
          <P>Guests</P>
          <Div>2 guests </Div>
        </Guests>
      </FinalConfirmation>

      <BookedDetailsTitle>Booked details</BookedDetailsTitle>

      <BookedDetailsField>

        <DetailsFields>
          <BookedService>$119  +  5nights</BookedService>
          <DetailsFieldsAmount>$833</DetailsFieldsAmount>
        </DetailsFields>

        <DetailsFields>
          <BookedService>Occupancy text and fee</BookedService>
          <DetailsFieldsAmount>-$125</DetailsFieldsAmount>
        </DetailsFields>

        <DetailsFields>
          <BookedService>Service free</BookedService>
          <DetailsFieldsAmount>$103</DetailsFieldsAmount>
        </DetailsFields>

        <FinalTotalAmount>
          <Total>Total</Total>
          <DetailsFieldsAmount>$833</DetailsFieldsAmount>
        </FinalTotalAmount>
      </BookedDetailsField>

      <Report>Report this property</Report>
    </FareSummarySection>
  );
};

export default FareSummary;

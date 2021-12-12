import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

// *********************************************

const FareSummarySection = styled.section`
  max-width: 445px;
  width: 100%;
  background-color: ${(props) => props.theme.ExploreWorldCard};
  padding: 40px 35px 36px;
  color: #353945;
  border: 1px solid #d8d9da;
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
  border-radius:10px;
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
color:${(props) => props.theme.fareSummaryTitle};
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
span{
  font-weight: 500;
  font-size: 20px;
  color:${(props) => props.theme.checkinOutDateColor};
}
`;
const DetailsFieldsAmount = styled.div`
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: ${(props) => props.theme.checkinOutDateColor};
`;
const DetailsFieldsAmountService = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${(props) => props.theme.checkinOutDateColor};
`;
const Guests = styled.div``;
const FinalTotalAmount = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:30px;
  padding:7.5px 12px;
  background-color:${(props) => props.theme.finalTotalAmount} ;
  border-radius: 6px;
`;
const Total = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FeatureDetailsTitle};
`;
const Report = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
text-align:center;

`;
// *****************************************
const FareSummary = ({prop}) => {

  const {t} = useTranslation();

  return (
    <FareSummarySection>
      <SectionTitle>{prop.name} </SectionTitle>

      <StarWrapper>
        <IconWrapper>
          <AiFillStar  className='star' style={{ color: "#FFC542", fontSize: "16px" }} />
        </IconWrapper>
        <span>
        {prop.rating}<small>({prop.reviews} {t('reviews')})</small>{" "}
        </span>
      </StarWrapper>

      <Image src= {`/assets/img/${prop.photo}`} alt={prop.name} />
     
      <Accomodation>{t('privateroom')}</Accomodation>

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
          <P>{t('guest')}</P>
          <Div>2  {t('guest')}</Div>
        </Guests>
      </FinalConfirmation>

      <BookedDetailsTitle>{t('FareSummary')}</BookedDetailsTitle>

      <BookedDetailsField>

        <DetailsFields>
          <BookedService><span>${prop.price } </span>  +  5 {t('tun')}</BookedService>
          <DetailsFieldsAmount>{ `$${prop.price * 5} `} </DetailsFieldsAmount>
        </DetailsFields>

        <DetailsFields>
          <BookedService>{t('occupancy')}</BookedService>
          <DetailsFieldsAmountService>-$125</DetailsFieldsAmountService>
        </DetailsFields>

        <DetailsFields>
          <BookedService>{t('servicefree')}</BookedService>
          <DetailsFieldsAmountService>$103</DetailsFieldsAmountService>
        </DetailsFields>

        <FinalTotalAmount>
          <Total>{t('totals')}</Total>
          <DetailsFieldsAmount>{ `$${prop.price * 5}`}</DetailsFieldsAmount>
        </FinalTotalAmount>
      </BookedDetailsField>

      <Report>{t('report')}</Report>
    </FareSummarySection>
  );
};

export default FareSummary;

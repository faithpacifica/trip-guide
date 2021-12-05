import React from "react";
import "./bookingdetails.css";
import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";



// **************************************************
const BookingSection = styled.section`
  max-width: 408px;
  width: 100%;
  background-color: white;
  padding: 20px 46px 31px;
  color: #353945;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  margin-top: 42px;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PriceAmount = styled.div`
  font-size: 34px;
  line-height: 20px;
  color: #141416;
  font-weight: bold;
  small {
    margin-right: 3px;
    font-size: 18px;
    line-height: 23px;
    font-weight: normal;
  }
  span {
    font-size: 18px;
    line-height: 23px;
    color: #b1b5c4;
    font-weight: normal;
  }
`;
const Hr = styled.hr`
  color: ${(props) => props.theme.SingleHotelInfoTitle};
`;

const Discount = styled.button`
  background: #145ce6;
  border-radius: 25px;
  border: none;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckInOut = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckInOutBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
  margin: 0;
  margin-bottom: 11px;
  margin-top: 20px;
`;

const CheckOut = styled.div``;
const CheckOutDate = styled.div``;

const CheckInOutDate = styled.div`
  padding: 12px 18px 12px 14px;
  background-color: #f4f5f6;
  border-radius: 10px;
  span {
    font-size: 14px;
    line-height: 21px;
    color: #353945;
  }
`;

const ExtraFeatures = styled.div``;
const Number = styled.div`
  span{
    font-weight: 500;
    font-size: 14px;
    line-height: 27px;
    color: #B1B5C4;
  }
`;

const PretotalPrice = styled.div`
  padding: 10px 22px;
  background-color: #f4f5f6;
  border-radius: 10px;
`;
const InnerWrapper = styled.div`
display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
`;

const PriceDetail = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #353945;
`;
const Amount = styled.div`
span{
    font-size: 14px;
  line-height: 21px;
  color: #353945;
}
`;

const TotalPaymentBox = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
margin-top:12px;
margin-bottom:23px;
`;

const TotalPayment = styled.h5`
margin:0;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;

`;
const TotalAmount = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
`;

const BookNow = styled.button`
border:none;
background-color: #316BFF;
border-radius: 12px;
padding:11px 110px;
width:100%;

margin-bottom:12px;
  a{
    color: #FFFFFF;
    ont-weight: bold;
font-size: 20px;
line-height: 26px;
    text-decoration:none;
  }
`;

const Warn = styled.div`
font-size: 14px;
line-height: 21px;
color: #777E91;
text-align:center;
`;

// *********************************************
const BookingDetails = () => {
  return (
    <BookingSection>
      <Price>
        <PriceAmount>
          <div>
            $142<small>/night</small>
            <span> $184</span>
          </div>
        </PriceAmount>
        <Discount>20% OFF</Discount>
      </Price>
      <Hr />

      <CheckInOutBox>
        <CheckInOut>
          <Subtitle>Check-In </Subtitle>
          <CheckInOutDate>
            <AiOutlineCalendar style={{ color: "#2E2E2E", marginRight:'5px',fontSize:'22px' }}/> <span>May 15, 2021</span>
          </CheckInOutDate>
        </CheckInOut>

        <CheckInOut>
          <Subtitle>Check-Out </Subtitle>
          <CheckInOutDate>
            <AiOutlineCalendar style={{ color: "#2E2E2E", marginRight:'5px',fontSize:'22px' }}/> <span>May 22, 2021 </span>
          </CheckInOutDate>
        </CheckInOut>
      </CheckInOutBox>

      <Subtitle>Guest</Subtitle>
      {/* TODO:shuni uzgartirish */}
      <CheckInOutDate>2 Adults, 1 Children</CheckInOutDate>

      <Subtitle>Extra Features</Subtitle>
      <ExtraFeatures>
        <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Allow to bring pet"
              aria-label="option 1"
            />
          </Form.Group>
          <Number>
            $<span>13</span>
          </Number>
        </Box>
        <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Breakfast a day per person"
              aria-label="option 2"
            />
          </Form.Group>
          <Number>
            $<span>10</span>
          </Number>
        </Box>
        <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Parking a day"
              aria-label="option 3"
            />
          </Form.Group>
          <Number>
            $<span>6</span>
          </Number>
        </Box>
        <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Parking a day"
              aria-label="option 3"
            />
          </Form.Group>
          <Number>
            <span>Free</span>
          </Number>
        </Box>
      </ExtraFeatures>

      <Subtitle>Price</Subtitle>

      <PretotalPrice>
        <InnerWrapper>
          <PriceDetail>1 Nights</PriceDetail>
          <Amount>
            $<span>500</span>
          </Amount>
        </InnerWrapper>

        <InnerWrapper>
          <PriceDetail>Discount 20%</PriceDetail>
          <Amount>
            $<span>200</span>
          </Amount>
        </InnerWrapper>

        <InnerWrapper>
          <PriceDetail>Breakfast a day per person</PriceDetail>
          <Amount>
            $<span>10</span>
          </Amount>
        </InnerWrapper>

        <InnerWrapper>
          <PriceDetail>Service fee</PriceDetail>
          <Amount>
            $<span>5</span>
          </Amount>
        </InnerWrapper>
      </PretotalPrice>

    <TotalPaymentBox>
      <TotalPayment>Total payment</TotalPayment>
      <TotalAmount>$300</TotalAmount>
    </TotalPaymentBox>

      <BookNow> <Link to="/payment">Book Now</Link></BookNow>

      <Warn>You will not get charged yet</Warn>
    </BookingSection>
  );
};

export default BookingDetails;

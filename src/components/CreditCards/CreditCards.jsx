import React from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

// **************************************
const SectionSubTitle = styled.h4`
  margin: 0;
  margin-bottom: 23px;
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.DetailsTitle};
`;

const CardsSection = styled.div``;
const Cards = styled.div`
display:flex:
flex-direction:row;
position:relative;
margin-bottom:30px;
img{
  width: 96px;
  height: 47.53px;
  object-fit:cover;
  display:inline-block;
  margin-right:12px;
  background-color: rgba(47, 128, 237, 0.05);
  box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
`;

const Hr = styled.hr`
  background-color: #e5e5e5;
  width: 524px;
  height: 2px;
  margin-bottom: 40px;
`;

const CreditCardDateAndNumber = styled.div`
  width:470px;
`;
const CreditCardType = styled.div`
  width: 692px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  img {
    border-radius: 20px;
    width: 336px;
    height: 162px;
  }
`;

const CardDetails = styled.div`
  margin-bottom:19px;
`;
const CardDetailsLabel = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #353945;
  margin-bottom:12px;
`;
const CardNumber = styled.div`
  width:470px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4F4F4F;
  padding:13px 20px;
  background: #F4F5F6;
  border: 1px solid #878CFF;
  border-radius: 10px;
`;

const Group = styled.div`
  display:flex;
  justify-content:space-between;
`;
const ExpireDate = styled.div`
  width:214px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4F4F4F;
  padding:13px 20px;
  background: #F4F5F6;
  border: 1px solid #878CFF;
  border-radius: 10px;
`;
const CVC = styled.div`
  width:214px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4F4F4F;
  padding:13px 20px;
  background: #F4F5F6;
  border: 1px solid #878CFF;
  border-radius: 10px;
`;

const ConfirmButton = styled.button`
    font-family: Roboto,sans-serif;
    border:none;

    padding:11.5px 20px;
    background-color: #3B71FE;
    border-radius: 36px;
    margin-top:34px;
    margin-bottom:100px;
    a{
      text-decoration:none;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #FFFFFF;
    }
`;

// ****************************************
const CreditCards = () => {
  return (
    <CardsSection>
      <SectionSubTitle>Your tour</SectionSubTitle>
      <Cards>
        <img src="/../../assets/img/card1.png" alt="credit card" />
        <GoCheck
          style={{
            position: "absolute",
            padding: "3px",
            backgroundColor: "#3B71FE",
            borderRadius: "50%",
            color: "white",
            left: "85px",
            top: "-5px",
          }}
        />
        <img src="/../../assets/img/card2.png" alt="credit card" />
        <img src="/../../assets/img/card3.png" alt="credit card" />
        <img src="/../../assets/img/card4.png" alt="credit card" />
      </Cards>

      <Hr />
    <CreditCardDateAndNumber>
       <CreditCardType>
        <img src="/../../assets/img/visa.png" alt="credit card" />
        <img src="/../../assets/img/master.png" alt="credit card" />
      </CreditCardType>

      <CardDetails>
        <CardDetailsLabel>Card Number</CardDetailsLabel>
        <CardNumber>5884 6241 4444 3333</CardNumber>
      </CardDetails>

      <Group>
       <CardDetails>
        <CardDetailsLabel>Expire Date</CardDetailsLabel>
        <ExpireDate>MM / YY</ExpireDate>
      </CardDetails>

      <CardDetails>
        <CardDetailsLabel>CVC/CVV</CardDetailsLabel>
        <CVC>****</CVC>
      </CardDetails>
      </Group>
    </CreditCardDateAndNumber>



      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Save Card" aria-label="" />
      </Form.Group>

      <ConfirmButton type='button'>
         <Link to="/congratulation">Confirm and reserve</Link>
      </ConfirmButton>

    </CardsSection>
  );
};

export default CreditCards;

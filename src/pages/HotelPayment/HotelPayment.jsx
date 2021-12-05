import React from 'react';
import './hotelpayment.css';
import styled from "styled-components";
import CTA from "../../components/CTA/CTA";
import { Breadcrumb } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumpTheme } from "../../styled";
import CreditCards from '../../components/CreditCards/CreditCards';
import FareSummary from '../../components/FareSummary/FareSummary';

// ****************************************************
const PaymentSection = styled.div`
  background-color: ${(props) => props.theme.DetailsBg};
  padding-top: 40px;
  padding-left: 75px;
  padding-right: 75px;
  padding-bottom: 200px;
  margin-bottom: -250px;
`;

const ListBreadcrumb = styled.div`
  padding-bottom: 48px;
`;
const PaymentTitle = styled.h2`
  margin:0;
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.DetailsTitle};
`;
const DetailsContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap:wrap;
`;

const ConfirmationDetails = styled.div`
    margin-right:35px;
`;
const ConfirmBook = styled.div`
    width:100%;
    max-width:495px;
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.SingleHotelInfoTitle};
  margin-bottom: 40px;
`;
const PaymentSubTitle = styled.h4`
    margin:0;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.DetailsTitle};
`;

const TourDate = styled.div`
    width:470px;
    padding:7.7px 20px;
    background-color: #F4F4F6;
    border-radius: 15px;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
        label{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #141416;
            display:block;
        }
        input{
            outline:none;
            border:none;
            background-color:transparent;
            display:block;
            &::placeholder{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #84878B;
            }
        }
`;

const Traveller = styled.div`
  width:470px;
    padding:7.7px 20px;
    background-color: #F4F4F6;
    border-radius: 15px;
    margin-bottom:40px;
    display:flex;
    flex-direction:column;
        label{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #141416;
            display:block;
        }
        input{
            outline:none;
            border:none;
            background-color:transparent;
            display:block;
            &::placeholder{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #84878B;
            }
        }
`;
// *******************************************************
const HotelPayment = () => {
    return (
        <>
        <PaymentSection>
          <ListBreadcrumb>
            <BreadcrumpTheme>
              <Breadcrumb>
                <Breadcrumb.Item href="/">
                  Home <IoIosArrowForward />
                </Breadcrumb.Item>

                <Breadcrumb.Item href="/hotellist">
                  Hotel List <IoIosArrowForward />
                </Breadcrumb.Item>

                <Breadcrumb.Item href="/details">
                  Hotel details <IoIosArrowForward />
                </Breadcrumb.Item>

                <Breadcrumb.Item active> Hotel Payment</Breadcrumb.Item>
              </Breadcrumb>
            </BreadcrumpTheme>
          </ListBreadcrumb>

          <DetailsContent>
              <ConfirmationDetails>
                  <ConfirmBook>
                  <PaymentTitle>Confirm your Book</PaymentTitle>
                  <Hr/>
                  <PaymentSubTitle>Your tour</PaymentSubTitle>
                 <TourDate>
                     <label htmlFor="date">Date</label>
                     <input type="text" id = 'date' placeholder= 'June 27 - 30, 2020'/>
                 </TourDate>
                 <Traveller>
                     <label htmlFor="date">Traveller</label>
                     <input type="text" id = 'date' placeholder= '1 Passenger'/>
                 </Traveller>
                  </ConfirmBook>

                  <CreditCards />
              </ConfirmationDetails>
              <FareSummary />
          </DetailsContent>
        </PaymentSection>
        <CTA />
      </>
    );
};

export default HotelPayment;
import React from "react";
import "./congratulations.css";
import styled from "styled-components";
import CTA from "../../components/CTA/CTA";
import { Breadcrumb } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumpTheme } from "../../styled";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
// *********************************************************
const SuccessSection = styled.div`
  background-color: ${(props) => props.theme.DetailsBg};
  padding-top: 40px;
  padding-left: 75px;
  padding-right: 75px;
  padding-bottom: 200px;
  margin-bottom: -250px;
`;

const ListBreadcrumb = styled.div`
  padding-bottom: 70px;
`;

const CongratText = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 21px;
  margin-bottom: 20px;
  color: #3b3e44;
`;
const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  color: #3b3e44;
`;

const Divider = styled.hr`
  margin: 0;
  width: 822px;
  height: 1px;
  background-color: #e7ecf3;
  margin-bottom: 37px;
`;
const Text = styled.div`
  margin-bottom: 27px;
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;
  color: #23262f;
`;

const AccomodationInfo = styled.div`
  display: flex;
  margin-bottom: 34px;
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
  margin-right: 37px;
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

const Accomodation = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
`;

const FinalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReserveInfo = styled.div`
  width: 380px;
  // margin-right: 117px;
  margin-bottom:30px;
`;

const CityImage = styled.div`
  width: 670px;
  height: 403px;
  object-position: cover;
  img {
    width: 100%;
    display: flex;
    border-radius: 20px;
  }
`;

const GoToYourHome = styled.span`
  background-color: #3b71fe;
  padding: 13.5px 36px;
  border-radius: 34px;
  margin-bottom: 100px;
  display: inline-block;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 130.2%;
    color: #ffffff;
  }
`;

const TravelDateInfo = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const TourDate = styled.div`
  padding: 7.7px 20px;
  width: 184px;
  background-color: #f4f4f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #141416;
    display: block;
  }
  input {
    outline: none;
    border: none;
    background-color: transparent;
    display: block;
    &::placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #84878b;
    }
  }
`;

const Traveller = styled.div`
  width: 160px;
  padding: 7.7px 20px;
  background-color: #f4f4f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #141416;
    display: inline-block;
  }
  input {
    outline: none;
    border: none;
    background-color: transparent;
    display: inline-block;
    &::placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #84878b;
    }
  }
`;

const ReserveDetails = styled.div`
  padding: 19px 25px;
  background-color: #f4f4f6;
  border: 1px solid #f0efef;
  border-radius: 10px;
`;

const ReserveDetailsTitle = styled.h5`
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
  margin: 0;
  margin-bottom: 24px;
  color: #23262f;
`;

const ReserveTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
      margin-bottom:22px;
  }
`;

const DetailName = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;
`;

const DetailContent = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #353945;
`;


// ************************************************************
const Congratulations = () => {
  return (
    <>
      <SuccessSection>
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

              <Breadcrumb.Item href="/payment">
                Confirm and pay
                <IoIosArrowForward />
              </Breadcrumb.Item>

              <Breadcrumb.Item active> Congratulations</Breadcrumb.Item>
            </Breadcrumb>
          </BreadcrumpTheme>
        </ListBreadcrumb>

        <CongratText>Congratulations!</CongratText>
        <SectionTitle>Your trip has been booked!</SectionTitle>
        <Divider />
        <Text>Switzerland Hotels and Places to Stay </Text>

        <AccomodationInfo>
          <StarWrapper>
            <IconWrapper>
              <AiFillStar style={{ color: "#FFC542", fontSize: "16px" }} />
            </IconWrapper>
            <span>
              4.8 <small>(122 reviews)</small>{" "}
            </span>
          </StarWrapper>

          <Accomodation>1 bedroom + 1 private room</Accomodation>
        </AccomodationInfo>

        <FinalInfo>
          <ReserveInfo>
            <hr />
            <TravelDateInfo>
              <TourDate>
                <label htmlFor="date">Date</label>
                <input type="text" id="date" placeholder="June 27 - 30, 2020" />
              </TourDate>
              <Traveller>
                <label htmlFor="date">Traveller</label>
                <input type="text" id="date" placeholder="1 Passenger" />
              </Traveller>
            </TravelDateInfo>

            <ReserveDetails>
              <ReserveDetailsTitle>Reserve details</ReserveDetailsTitle>
              <div>
                <ReserveTypeWrapper>
                  {/* TODO:icon add!! */}
                  <DetailName>Booking code</DetailName>
                  <DetailContent>FD_158456</DetailContent>
                </ReserveTypeWrapper>
                <ReserveTypeWrapper>
                  <DetailName>Date</DetailName>
                  <DetailContent>30 Apr, 2021</DetailContent>
                </ReserveTypeWrapper>
                <ReserveTypeWrapper>
                  <DetailName>Total</DetailName>
                  <DetailContent>$833</DetailContent>
                </ReserveTypeWrapper>
                <ReserveTypeWrapper>
                  <DetailName>Payment method</DetailName>
                  <DetailContent>Creadit card</DetailContent>
                </ReserveTypeWrapper>
              </div>
            </ReserveDetails>
          </ReserveInfo>

          <CityImage>
            <img src="../../assets/img/swizerland.jpg" alt="city image" />
          </CityImage>
        </FinalInfo>

        <GoToYourHome>
          <Link to="/">Go To Your Home</Link>
        </GoToYourHome>
      </SuccessSection>
      <CTA />
    </>
  );
};

export default Congratulations;

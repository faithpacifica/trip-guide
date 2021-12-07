import React from "react";
import "./hoteldetails.css";
import styled from "styled-components";
import CTA from "../../components/CTA/CTA";
import { Breadcrumb } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumpTheme } from "../../styled";
import { AiFillStar } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";
import HotelInfoDetails from "../../components/HotelInfoDetails/HotelInfoDetails";
import BookingDetails from "../../components/BookingDetails/BookingDetails";

// *****************************************************
const DetailsSection = styled.div`
  background-color: ${(props) => props.theme.DetailsBg};
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 200px;
  margin-bottom: -250px;
`;

const ListBreadcrumb = styled.div`
  padding-bottom: 18px;
`;
const DetailsTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.DetailsTitle};
`;

const DetailsContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  // flex-wrap:wrap;
`;

const StarWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
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

const Rating = styled.div`
  display: flex;
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

const ImagesGrid = styled.div`
  height:632px;
  width:1150px;
//   TODO:1240 edi
  border-radius:20px;
  margin:0 auto;
    img{
        width:100%;
        object-fit:cover;
        display:block;
        border-radius:20px;
    }
`;
// ******************************************************
const HotelDetails = () => {
  return (
    <>
      <DetailsSection>
        <ListBreadcrumb>
          <BreadcrumpTheme>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                Home
                <IoIosArrowForward />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/hotellist">
                Hotel List <IoIosArrowForward />
              </Breadcrumb.Item>
              <Breadcrumb.Item active> Hotel Details</Breadcrumb.Item>
            </Breadcrumb>
          </BreadcrumpTheme>
        </ListBreadcrumb>

        <DetailsTitle>Switzerland Hotels and Places to Stay</DetailsTitle>

        <Rating>
          <StarWrapper>
            <IconWrapper><AiFillStar style={{ color: "#FFC542", fontSize: "16px" }} /></IconWrapper>
            <span> 4.8 <small>(122 reviews)</small></span>
          </StarWrapper>
          <IconWrapper>
            <FiFlag style={{ color: "#84878B", fontSize: "16px", marginRight: "8px", marginTop: "3px" }}/>
            <span>Zuich town, Switzerland</span>
          </IconWrapper>
        </Rating>

        <ImagesGrid><img src='../../assets/img/details-grid-1.jpg' width='' height='632' alt='hotel image'></img>
        </ImagesGrid>

        <DetailsContent>
            <HotelInfoDetails />
            <BookingDetails />
        </DetailsContent>
      </DetailsSection>
      <CTA />
    </>
  );
};

export default HotelDetails;

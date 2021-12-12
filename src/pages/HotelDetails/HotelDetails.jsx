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
import { useParams } from "react-router-dom";
import apiCalls from '../../config/api';
import { useEffect, useState } from "react";
import Loader from '../../components/Loader';
import { useTranslation } from 'react-i18next';

// *****************************************************
const DetailsSection = styled.div`
  background-color: ${(props) => props.theme.DetailsBg};
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 300px;
  margin-bottom: -360px;
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
  height:500px !important;
  width:1240px;
  border-radius:20px;
  margin:0 auto;
  margin-bottom:40px;
    img{
        width:100%;
        height:500px;
        object-fit:cover;
        display:block;
        border-radius:20px;
    }
`;
// ******************************************************

const HotelDetails = () => {

  const {id} = useParams();
  const {t} = useTranslation();

  const [hotelDetail, getHotelDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    const getHotelDetails = async () => {
        try {
            const data = await apiCalls.getHotelDetails(id);
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            getHotelDetail(data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    getHotelDetails();
  },[id]
 ); 

 
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

          { error ?  <p className="error-message">{error}</p> :''}
         {isLoading ? <Loader/> :''}
         {!isLoading && !error ? 
              <div>
                    <DetailsTitle>{hotelDetail.name}</DetailsTitle>

                    <Rating>
                      <StarWrapper>
                        <IconWrapper><AiFillStar className='star' style={{ color: "#FFC542 !important", fontSize: "16px" }} /></IconWrapper>
                        <span> {hotelDetail.rating} <small>({hotelDetail.reviews} {t('reviews')})</small></span>
                      </StarWrapper>
                      <IconWrapper>
                        <FiFlag style={{ color: "#84878B", fontSize: "16px", marginRight: "8px", marginTop: "3px" }}/>
                        <span>{hotelDetail.name}</span>
                      </IconWrapper>
                    </Rating>

                    <ImagesGrid><img src={`/assets/img/${hotelDetail.photo}`} width='' height='632' alt={hotelDetail.name} />
                    </ImagesGrid>
                

                      <DetailsContent>
                          <HotelInfoDetails prop = {hotelDetail} />
                          <BookingDetails  prop = {hotelDetail} />
                      </DetailsContent>
              </div>
              : ''}

      </DetailsSection>
      <CTA />
    </>
  );
};

export default HotelDetails;

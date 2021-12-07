import React from "react";
import "./toptour.css";
import styled from "styled-components";
import TopTourCard from "../TopTourCard/TopTourCard";
import Pagination from "react-bootstrap/Pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , { Autoplay } from 'swiper';


// *********************************************************
const TourTop = styled.div`
  padding: 71px 0 0px 0;
  background-color:${(props) => props.theme.ExploreWorldBg}
`;

const TourTopTitle = styled.h2`
  font-family: DM Sans, sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  margin: 0;
  margin-bottom: 12px;
  color: ${(props) => props.theme.ExploreWorldTitle};
  text-align: left;
`;

const TourTopText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color:${(props) => props.theme.TrendingText};
  margin-bottom: 61px;
`;

const TourTopWrapper = styled.div`
  display: flex;
  //   flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -15px;
  margin-right: -15px;
`;

const SectionTop = styled.div`
display:flex;
justify-content:space-between;
align-items:center;S
`;

// ****************************************************************
const TopTour = () => {
  SwiperCore.use([Autoplay]);

  return (
    <TourTop className="top-tour">
      <div className="container">
        <SectionTop className="section-top">
          <div>
            <TourTopTitle className="top-tour__heading">Top Tour</TourTopTitle>
            <TourTopText className="top-tour__desc">
              Keep calm & travel on
            </TourTopText>
          </div>

          <div>
            <Pagination>
              <Pagination.Prev />
                 <Pagination.Next />
            </Pagination>
          </div>
        </SectionTop>

    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={3}
      loop autoplay={{ delay: 3000, disableOnInteraction: false }}
      scrollbar={{ draggable: true }}
    >
        <TourTopWrapper className="top-tour-wrapper">
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        <SwiperSlide> <TopTourCard /></SwiperSlide>
        </TourTopWrapper>
    </Swiper>
      </div>
    </TourTop>

  );
};

export default TopTour;

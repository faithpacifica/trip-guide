import React from "react";
import "./explore.css";
import styled from "styled-components";
import ExploreCard from "../ExploreCard/ExploreCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , { Autoplay } from 'swiper';


// ********************   STYLES  ************************
const ExploreWorld = styled.section`
  padding: 70px 0 70px;
  background-color: ${(props) => props.theme.ExploreWorldBg};
`;

const ExploreWorldTitle = styled.h2`
  font-family: DM Sans, sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  margin: 0;
  margin-bottom: 12px;
  color: ${(props) => props.theme.ExploreWorldTitle};
`;

const ExploreWorldText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.TrendingText};
  margin-bottom: 49px;
`;

const ExploreWorldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



// *****************************************************
const Explore = () => {
SwiperCore.use([Autoplay]);


  return (
    <ExploreWorld className="explore-world">
      <div className="container">
        <SectionTop className="section-top">
          <div>
            <ExploreWorldTitle className="explore-world__heading">
              Explore The World
            </ExploreWorldTitle>
            <ExploreWorldText className="explore-world__desc">
              10,788 beautiful places to go
            </ExploreWorldText>
          </div>
        </SectionTop>

    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={4}
      loop autoplay={{ delay: 4000, disableOnInteraction: false }}
      scrollbar={{ draggable: true }}

    >
        <ExploreWorldWrapper className="explore-world__wrapper ">
           <SwiperSlide> <ExploreCard /></SwiperSlide>
            <SwiperSlide><ExploreCard /></SwiperSlide>
            <SwiperSlide><ExploreCard  /></SwiperSlide>
            <SwiperSlide><ExploreCard /></SwiperSlide>
            <SwiperSlide><ExploreCard /></SwiperSlide>
            <SwiperSlide><ExploreCard /></SwiperSlide>
            <SwiperSlide><ExploreCard  /></SwiperSlide>
            <SwiperSlide><ExploreCard /></SwiperSlide>
        </ExploreWorldWrapper>
        </Swiper>
      </div>
    </ExploreWorld>
  );
};

export default Explore;

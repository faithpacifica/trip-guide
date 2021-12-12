import React from "react";
import "./toptour.css";
import styled from "styled-components";
import TopTourCard from "../TopTourCard/TopTourCard";
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore , { Navigation } from 'swiper';
import { useTranslation } from 'react-i18next';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import apiCalls from "../../config/api";
import { useEffect, useState } from "react";
import Loader from '../Loader';


// *********************************************************
const TourTop = styled.div`
  padding: 71px 0 20px 0;
  background-color:${(props) => props.theme.ExploreWorldBg};
  margin-top:-20px;
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

  SwiperCore.use([Navigation]);

  const {t} = useTranslation();

  const [tour,setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  

  useEffect(() => {

    const getTours = async () => {
        try {
            const data = await apiCalls.getTours();
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            setTour(data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
      getTours();
  },[]
  
 );    

             

  return (
    <TourTop className="top-tour">
      <div className="container">
        <SectionTop className="section-top">
          <div>
            <TourTopTitle className="top-tour__heading"> {t('TopTourTitle')}</TourTopTitle>
            <TourTopText className="top-tour__desc">
               {t('TopTourText')}
            </TourTopText>
          </div>

          <div class = 'buttons'>
            <button class='swiper-prev__button' type ='button'> 
            <GrFormPrevious
             style={{
              color:'#84878B',
              fontSize:'20px',
              fontWeight:'bold'
             }}/>
              </button>
            <button class ='swiper-next__button' type ='button'> 
            <MdOutlineNavigateNext
             style={{
              fill:'black',
              fontSize:'20px',
              fontWeight:'bold'
             }}/> 
             </button>
          </div>
        </SectionTop>

          { error ?  <p className="error-message">{error}</p> :''}
          {isLoading ? <Loader/> :''}
          {!isLoading && !error ? 

                  <Swiper
                    modules={[Navigation]}
                    navigation = {{
                      nextEl:'.swiper-next__button',
                      prevEl:'.swiper-prev__button',
                    }}
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true }}
                  >
                      <TourTopWrapper className="top-tour-wrapper">
                        
                     {
                       tour.map(el => 
                         ( <SwiperSlide key = {el.id}> 
                            <TopTourCard tourobj ={el}/>
                         </SwiperSlide>
                         )
                       )
                     }
                    
                      </TourTopWrapper>
                  </Swiper>
            : ''}
      </div>
    </TourTop>

  );
};

export default TopTour;

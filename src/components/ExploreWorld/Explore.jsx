import React from "react";
import "./explore.css";
import styled from "styled-components";
import ExploreCard from "../ExploreCard/ExploreCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , { Navigation} from 'swiper';
import { useTranslation } from 'react-i18next';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import apiCalls from "../../config/api";
import { useEffect, useState } from "react";
import Loader from '../Loader';


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

SwiperCore.use([Navigation]);

 const {t} = useTranslation();

 
 const [explore,setExplore] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState();

 useEffect(() => {


  const getExplore = async () => {
      try {
          const data = await apiCalls.getExplore();
          setTimeout(() => {
            setIsLoading(false)
          },2000);
          setExplore(data);
      } catch (error) {
          setError(error.message);
          setIsLoading(false);
      }
  }
  getExplore();
  
},[] 

);


  return (
    <ExploreWorld className="explore-world">
      <div className="container">
        <SectionTop className="section-top">
          <div>
            <ExploreWorldTitle className="explore-world__heading">
             {t('ExploreTitle')}
            </ExploreWorldTitle>
            <ExploreWorldText className="explore-world__desc">
              10,788  {t('ExploreText')}
            </ExploreWorldText>
          </div>

          <div class = 'buttons'>
            <button class='swiper-prev-button' type ='button'> 
            <GrFormPrevious
             style={{
              color:'#84878B',
              fontSize:'20px',
              fontWeight:'bold'
             }}/>
              </button>
            <button class ='swiper-next-button' type ='button'> 
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
            nextEl:'.swiper-next-button',
            prevEl:'.swiper-prev-button',
          }}

          grabCursor={true}
          spaceBetween={10}
          slidesPerView={4}
          loop autoplay={{ delay: 4000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
        >
        <ExploreWorldWrapper className="explore-world__wrapper ">

        {
           explore.map(el => 
           (  <SwiperSlide key = {el.id}> 
                 <ExploreCard exploreobj ={el}/>
              </SwiperSlide>
            )
          )
        }

            </ExploreWorldWrapper>
        </Swiper>
       : ''}
      </div>
    </ExploreWorld>
  );
};

export default Explore;

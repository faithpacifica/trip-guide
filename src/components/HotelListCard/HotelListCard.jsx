import React from "react";
import styled from "styled-components";
import "./hotellistcard.css";
import { AiFillStar } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";
import { MdOutlinePinDrop } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiOutlineWifi } from "react-icons/ai";
import { RiParkingBoxLine } from "react-icons/ri";
import { RiBookmark3Line } from "react-icons/ri";
import { AiOutlineDribbble } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


// ********************************************************
const ListCard = styled.div`
  width: 970px;
  height: 465px;
  margin-bottom: 50px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.ListCarBorder};
  display: flex;
`;

const Img = styled.img`
  width: 420px;
  height:465px;
  border-radius: 20px 0 0 20px;
`;

const HotelInfo = styled.div`
  padding: 30px;
  width: 550px;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 30px;
  line-height: 60px;
  margin-bottom: 22px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.ListCardTitle};
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

const LocationAndTime = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ExploreLocation = styled.div`
  display: flex;
  margin-right: 20px;
  span {
    color: ${(props) => props.theme.ListCardReview};
    font-size: 16px;
    line-height: 24px;
  }
`;
const Calendar = styled.div`
  display: flex;
  span {
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.ListCardReview};
  }
`;
const Departure = styled.div`
  display: flex;
  margin-bottom: 40px;
  span {
    color: ${(props) => props.theme.ListCardReview};
  }
`;
const Services = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const ServiceType = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.ServiceType};
`;

const Type = styled.div`
  display: flex;
  margin-bottom: 12.5px;
`;

const PriceAndBooking = styled.div`
  display: flex;
  flex-direction: column;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
  color: ${(props) => props.theme.TrendingH2};
  margin-right: 8px;
  background-color: ${(props) => props.theme.ExploreWorldCard};
  padding: 4px 20px;
  border-radius: 37px;
  margin-bottom: 20px;
  small {
    margin-left: 3px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #84878b;
  }
`;

const BookNow = styled.div`
  border: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  padding: 10px 40px;
  text-align: center;
  background-color: #3b71fe;
  box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
  border-radius: 23px;

  margin-bottom: 15px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

// ********************************************************
const HotelListCard = ({hotelsobj}) => {

  const {t} = useTranslation();

  return (
    <ListCard >
      <Img src={`/assets/img/${hotelsobj.photo}`} width="500" height="465" alt={hotelsobj.name} />
      <HotelInfo>
        <CardTitle>{hotelsobj.name}</CardTitle>
        <Rating>
          <StarWrapper>
            <IconWrapper>
              <AiFillStar className='star' style={{ color: "#FFC542", fontSize: "16px" }} />
            </IconWrapper>
            <span>
            {hotelsobj.rating}<small>({hotelsobj.reviews} {t('reviews')} )</small>
            </span>
          </StarWrapper>
          <IconWrapper>
            <FiFlag
              style={{ color: "#84878B", fontSize: "16px", marginRight: "8px", marginTop: "3px" }}
            />
            <span>{hotelsobj.name}</span>
          </IconWrapper>
        </Rating>

        <LocationAndTime>
          <ExploreLocation>
            <IconWrapper>
              <MdOutlinePinDrop
                style={{
                  color: "#84878B",
                  fontSize: "22px",
                  marginRight: "4px",
                }}
              />
            </IconWrapper>
            <span>{hotelsobj.location}</span>
          </ExploreLocation>
          <Calendar>
            <IconWrapper>
              <RiCalendarTodoLine
                style={{
                  color: "#84878B",
                  fontSize: "22px",
                  marginRight: "4px",
                }}
              />
            </IconWrapper>
            <span>15.05.2021-16.05.2021</span>
          </Calendar>
        </LocationAndTime>

        <Departure>
          <IconWrapper>
            <IoAirplaneOutline
              style={{ color: "#84878B", fontSize: "20px", marginRight: "6px" }}
            />
          </IconWrapper>
          <span>{t('depture')}   {(hotelsobj.location).substr(0, (hotelsobj.location).indexOf(' '))}</span>
        </Departure>

        <Services>
          <ServiceType>
            <Type>
              <IconWrapper>
                <AiOutlineWifi
                  style={{
                    color: "#84878B",
                    fontSize: "18px",
                    marginRight: "16px",
                  }}
                />
              </IconWrapper>
              <span>{t('freewifi')} </span>
            </Type>
            <Type>
              <IconWrapper>
                <RiParkingBoxLine
                  style={{
                    color: "#84878B",
                    fontSize: "18px",
                    marginRight: "16px",
                  }}
                />
              </IconWrapper>
              <span>{t('parking')}</span>
            </Type>
            <Type>
              <IconWrapper>
                <RiBookmark3Line
                  style={{
                    color: "#84878B",
                    fontSize: "18px",
                    marginRight: "16px",
                  }}
                />
              </IconWrapper>
              <span>{t('offer')}</span>
            </Type>
            <Type>
              <IconWrapper>
                <AiOutlineDribbble
                  style={{
                    color: "#84878B",
                    fontSize: "18px",
                    marginRight: "16px",
                  }}
                />
              </IconWrapper>
              <span>{t('visit')} </span>
            </Type>
            <Type>
              <IconWrapper>
                <BsGrid
                  style={{
                    color: "#84878B",
                    fontSize: "18px",
                    marginRight: "16px",
                  }}
                />
              </IconWrapper>
              <span>{t('saferty')}</span>
            </Type>
          </ServiceType>

          <PriceAndBooking>
            <Price>
              ${hotelsobj.price} <small>{t('fortwo')}</small>
            </Price>
            <BookNow>
              <Link to={`/details/${hotelsobj.id}`}>{t('booknow')}</Link>
            </BookNow>
          </PriceAndBooking>
        </Services>
      </HotelInfo>
    </ListCard>
  );
};

export default HotelListCard;

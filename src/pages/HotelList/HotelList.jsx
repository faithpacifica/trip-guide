import React from 'react';
import "./hotellist.css";
import styled from 'styled-components';
import CTA from '../../components/CTA/CTA'
import { Breadcrumb } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
import HotelListNavbar from '../../components/HotelListNavbar/HotelListNavbar';
import HotelListFilter from '../../components/HotelListFilter/HotelListFilter';
import HotelListCard from '../../components/HotelListCard/HotelListCard';
import { BiLoaderCircle } from "react-icons/bi";
import { BreadcrumpTheme } from '../../styled';
import apiCalls from '../../config/api';
import { useEffect, useState } from "react";
import Loader from '../../components/Loader';
import { useTranslation } from 'react-i18next';

// *********************************************************
const HotelListPage =  styled.div`
 background-color: ${(props) => props.theme.HotelListBg};
 padding-top:40px;
 margin-bottom: -250px;
`;

const ListBreadcrumb = styled.div`
    padding-left:55px;
`;

const HotelListContent = styled.div`
    display:flex;
    align-items:start;
    justify-content:center;
    padding: 60px 70px 240px;
`;

const ViewAll = styled.button`
    margin-top:10px;
    border:none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #B1B5C4;
    box-sizing: border-box;
    border-radius: 47px;
    color: ${(props) => props.theme.ViewAllBtn};
    padding:10px 42px 12px 50px;
    background-color:transparent;
    margin-left:420px;
    &:hover{
        cursor:pointer;
        color:white;
        background-color:#3B71FE;
    }

    &:active{
        color:white;
        background-color:light-blue;
    }
`;

// ********************************************************
const HotelList = () => {

    const {t} = useTranslation();

    const [hotels,setHotels] = useState([]);

    const [extraHotels, setExtraHotels] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
 
    useEffect(() => {

        const getHotels = async () => {
            try {
                const data = await apiCalls.getHotels();
                setTimeout(() => {
                    setIsLoading(false)
                  },2000);
                setHotels(data);
                setExtraHotels(data.slice(0,3));
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        getHotels();
     },[]);

      const LoadMore =( element) =>{
        setExtraHotels(hotels);
        element.target.style.display = 'none';
      }

    return (
        <>
        <HotelListPage>
            <ListBreadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
               <BreadcrumpTheme> <IoIosArrowForward /></BreadcrumpTheme>
                <Breadcrumb.Item active>  Hotel List</Breadcrumb.Item>
            </Breadcrumb>
            </ListBreadcrumb>

            <HotelListNavbar />

            <HotelListContent>
                <HotelListFilter />

                <div>
                    { error ?  <p className="error-message">{error}</p> :''}
                    {isLoading ? <Loader/> :''}
                    {!isLoading && !error ? 

                            <div>
                            {
                                extraHotels.map(el => 
                                ( <HotelListCard key = {el.id}  hotelsobj ={el}/>) )
                            }
                            </div>
                     : ''}

                        <ViewAll onClick ={LoadMore}>
                            <BiLoaderCircle  style = {{marginRight:'18px'}}/>
                            {t('viewAll')}
                        </ViewAll>
                 </div>
            </HotelListContent>

        </HotelListPage>
        <CTA />
        </>
    );
};

export default HotelList;
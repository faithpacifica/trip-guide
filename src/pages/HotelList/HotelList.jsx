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
`;

// ********************************************************
const HotelList = () => {
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
                    <div>
                        <HotelListCard />
                        <HotelListCard />
                        <HotelListCard />
                    </div>
                        <ViewAll type='button'>
                        <BiLoaderCircle style = {{marginRight:'18px'}}/>
                        View All</ViewAll>
                 </div>
            </HotelListContent>

        </HotelListPage>
        <CTA />
        </>
    );
};

export default HotelList;
import React from "react";
import styled from "styled-components";
import "./hotellistfilter.css";
import { BiSearch } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import RangeSlider from 'react-bootstrap-range-slider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apiCalls from "../../config/api";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Loader from '../Loader';
 // ****************************************************

const ListFilter = styled.div`
  min-width: 290px;
  margin-right: 40px;
`;
const Title = styled.h5`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.Filterh5};
  margin-bottom: 13px;
`;
const InputField = styled.div`
  position: relative;
  margin-bottom: 30px;
  z-index:1;
`;
const Input = styled.input`
  outline: none;
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  background: ${(props) => props.theme.FilterInput};
  padding: 16px 20px 13px;
  border: 1px solid #e7ecf3;
  border-radius: 10px;
  color: #b1b5c4;
`;
const PopularFilter = styled.div``;
const PriceBox = styled.div``;
const PropertyType = styled.div``;
const YourBudget = styled.div``;
const Facilities = styled.div``;
const Hr = styled.hr`
  margin-top:20px;
  margin-bottom: 30px;
 
 
`;
const PriceRange = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
// const SelectedPrice = styled.div`
//   font-size: 18px;
//   line-height: 18px;
//   color: ${(props) => props.theme.SelectedPrice};
//   padding: 7px 10px;
//   border: 2px solid #316bff;
//   border-radius: 9px;
// `;
const PriceInterval = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.PriceInterval};
    display: block;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Number = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
`;
const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #145ce6;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
`;

const PopularFilterField = styled.div`
display:flex;
color:#84878b;
font-size: 14px;
line-height: 21px;
  label{
    margin-left:12px;
    margin-bottom:12px;
  }
`;

const PopularFilterFieldFlex = styled.div`
display:flex;
justify-content:space-between;
color:#84878b;
font-size: 14px;
line-height: 21px;
label{
  margin-left:12px;
  margin-bottom:12px;
}
`;

// ****************************************************
const HotelListFilter = () => {
  const [range, setRange] = useState(30);
  const {t} = useTranslation();

  const handleClick = (event) => {
    console.log(event.target.value);
  };

  const [popularFilter,setPopularFilter] = useState([]);
  const [propertyType,setPropertyType] = useState([]);
  const [budget,setBudget] = useState([]);
  const [facility,setFacility] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();


  
  useEffect(() => {

    const getPopularFilter = async () => {
        try {
            const data = await apiCalls.getpopularFilters();
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            setPopularFilter(data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    getPopularFilter();


    const getPropertyTypes = async () => {
        try {
            const data = await apiCalls.getPropertyTypes();
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            setPropertyType(data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    getPropertyTypes();


    const getBudget = async () => {
        try {
            const data = await apiCalls.getBudget();
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            setBudget(data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    getBudget();

    const getFacilities = async () => {
        try {
            const data = await apiCalls.getFacilities();
            setTimeout(() => {
              setIsLoading(false)
            },2000);
            setFacility(data);
        } 
        catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    getFacilities();
  
  },[]
  
 ); 
 
 const handleChange = ((el) =>{
         setRange(el.target.value );
         console.log(el.target.value);
 })

//  ***************************************************
  return (
    <ListFilter> 
      <Title> {t('search_property')}</Title>
      <Form action="GET">
        <InputField className="input-field">
          <Input type="search" placeholder= {t('search-filter')} />
          <BiSearch
            style={{
              position: "absolute",
              top: "22px",
              right: "10px",
              color: "#DADADA",
              fontSize: "22px",
            }}
          />
        </InputField>

        <PopularFilter>
          <Title>  {t('popular_filter')}</Title>
         { error ?  <p className="error-message">{error}</p> :''}
         {isLoading ? <Loader/> :''}
         {!isLoading && !error ? 
             <Form.Group className="mb-3" id="formGridCheckbox">
                { popularFilter.map((el) =>
                    <PopularFilterField key = {el.id}>
                      <Form.Check 
                          onClick={handleClick}
                          value={el.value}
                          type="checkbox"
                          label={el.label}
                          aria-label={el.name}
                      />
                      <label>{el.name}</label> 
                </PopularFilterField>
           ) } 
         
        </Form.Group>
          :''}
          <Button variant=""> {t('see_more')}</Button>
        </PopularFilter>
        <Hr />


        <Title> {t('price_range')}</Title>
        <PriceBox>
          <PriceRange>
              <Form.Group as={Row}>
                <Col xs="9">
                  <RangeSlider
                    value={range}
                    onChange = {handleChange}
                    tooltip="on"
                    tooltipPlacement = 'top'
                    aria-valuenow = {range}
                    min={30}
                    max={150}
                  />
                </Col>
                <Col xs="3"> <Form.Control value={range}/></Col>
              </Form.Group>
          </PriceRange>

          <PriceInterval>
            <div>$30</div>
            <div>$150</div>
          </PriceInterval>
        </PriceBox>
        <Hr />

        <PropertyType>
          <Title> {t('property_type')}</Title>
      
          <Box>
            <Form.Group className="mb-12" id="formGridCheckbox">
            { propertyType.map((el) =>
                    <PopularFilterFieldFlex key = {el.id}>
                      <Form.Check 
                          onClick={handleClick}
                          value={el.value}
                          type="checkbox"
                          label={el.label}
                      />

                      <Number>{el.price}</Number>
                    </PopularFilterFieldFlex>
           ) } 
            </Form.Group>
          </Box>

          <Button variant=""> {t('see_more')}</Button>
        </PropertyType>
        <Hr />

        <YourBudget>
          <Title> {t('your_budget')}</Title>

          <Form.Group className="mb-3" id="formGridCheckbox">
          { budget.map((el) =>
                    <PopularFilterField key = {el.id}>
                      <Form.Check 
                          onClick={handleClick}
                          value={el.value}
                          type="checkbox"
                          label={el.label}
                      />
                    </PopularFilterField>
           ) } 
          </Form.Group>
        </YourBudget>
        <Hr />

        <Facilities>
          <Title> {t('facilities')}</Title>

          <Box>
            <Form.Group className="mb-12" id="formGridCheckbox">
            { facility.map((el) =>
                    <PopularFilterFieldFlex key = {el.id}>
                      <Form.Check 
                          onClick={handleClick}
                          value={el.value}
                          type="checkbox"
                          label={el.label}
                      />
                      <Number>{el.price}</Number>
                    </PopularFilterFieldFlex>
           ) } 
            </Form.Group>
          </Box>

          <Button variant=""> {t('see_more')}</Button>
        </Facilities>
      </Form>
    </ListFilter>
  );
};

export default HotelListFilter;

import React from 'react'
import styled from "styled-components";
import './hotellistfilter.css'
import { BiSearch} from "react-icons/bi";
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck';
import { Range } from 'react-range';
import { FilterLabelTheme } from '../../styled';

// ****************************************************

const ListFilter = styled.div`
    min-width:290px;
    margin-right:40px;

`;
const Title = styled.h5`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color:  ${(props) => props.theme.Filterh5};
    margin-bottom:13px;
`;
const InputField = styled.div`
  position:relative;
  margin-bottom:30px;
`;
const Input = styled.input`
  outline:none;
  width:100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  background: ${(props) => props.theme.FilterInput};
  padding:16px 20px 13px;
  border: 1px solid #E7ECF3;
  border-radius: 10px;
  color: #B1B5C4;
`;

const PopularFilter = styled.div`
`;
const PriceBox = styled.div`
`;
const PropertyType = styled.div`
`;
const YourBudget = styled.div`
`;
const Facilities = styled.div`
`;

const Hr = styled.hr`
margin-bottom:30px;
`;

const PriceRange =styled.div`
  padding:30px 0 0 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
`;

const SelectedPrice = styled.div`
font-size: 18px;
line-height: 18px;
color:${(props) => props.theme.SelectedPrice} ;
padding:7px 10px;
border: 2px solid #316BFF;
border-radius: 9px;
`;

const PriceInterval = styled.div`
display:flex;
justify-content:space-between;
div{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color:${(props) => props.theme.PriceInterval} ;
  display:block;
}
`;

const Box = styled.div`
  display:flex;
  justify-content:space-between;
`;

const Number = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #145CE6;
  background-color:transparent;
  border:none;
  `;


// ****************************************************
const HotelListFilter = () => {
  return (

    <ListFilter>
      <Title>Search location or property</Title>
      <Form action="#">
      <InputField className="input-field">
         <Input type ='search' placeholder = 'Search location or property' />
         <BiSearch style ={{position:'absolute', top:'22px',right:'10px', color:'#DADADA', fontSize:'22px'}}/>
      </InputField>

      <PopularFilter>
      <Title>Popular Filters</Title>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Hotels" aria-label="option 1"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Breakfast and Dinner"aria-label="option 2"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Free Cancellation"aria-label="option 3"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="No prepayment"aria-label="option 4"/>
            </Form.Group>

        <Button variant="">See more</Button>
      </PopularFilter>
      <Hr/>

        <Title>Price Range</Title>
      <PriceBox>
        <PriceRange>
            <Form.Label> <Form.Range /></Form.Label>
            <SelectedPrice>68</SelectedPrice>
        </PriceRange>
         {/* TODO:IMPROVE RANGE */}
     < PriceInterval> <div>$50</div><div>$150</div></PriceInterval>
      </PriceBox>
      <Hr/>

      <PropertyType>
      <Title>Property Type</Title>
      {/* TODO:faqat 1 tasini tanlidigan qilish */}
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Hotels" aria-label="option 1"/>
          </Form.Group>
          <Number>108</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Apartments"aria-label="option 1"/>
          </Form.Group>
          <Number>141</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Resort"aria-label="option 1"/>
          </Form.Group>
          <Number>108</Number>
      </Box>

      <Button variant="">See more</Button>
      </PropertyType>
      <Hr/>

      <YourBudget>
      <Title>Your Budget</Title>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Less than $75" aria-label="option 1"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="$125 to 200" aria-label="option 2"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="$200 to $300" aria-label="option 3"/>
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Greater than $300" aria-label="option 4"/>
            </Form.Group>
      </YourBudget>
      <Hr/>

      <Facilities>
      <Title>Facilities</Title>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Outdoor Sports" aria-label="option 1"/>
          </Form.Group>
          <Number>108</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Berbeque" aria-label="option 2"/>
          </Form.Group>
          <Number>141</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Living Room" aria-label="option 3"/>
          </Form.Group>
          <Number>108</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Room Service" aria-label="option 4"/>
          </Form.Group>
          <Number>108</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Swimming Pool" aria-label="option 5"/>
          </Form.Group>
          <Number>141</Number>
      </Box>
      <Box>
          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Spa" aria-label="option 6"/>
          </Form.Group>
          <Number>108</Number>
      </Box>

      <Button variant="">See more</Button>
      </Facilities>
      </Form>
    </ListFilter>
  )
}

export default HotelListFilter;

import React from "react";
import styled from "styled-components";
import "./hotellistnavbar.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { CgArrowsExchange } from "react-icons/cg";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Select, { components } from "react-select";
import { GrLocation } from "react-icons/gr";


// **************************************************
const ListNavbar = styled.div`
  background-color: ${(props) => props.theme.HotelListnavbarBg};
  box-shadow: 0px 10px 40px rgba(89, 89, 89, 0.1);
  border-radius: 20px;
  margin-top: 60px;
  padding: 30px 50px;
`;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  button {
    color: ${(props) => props.theme.TrendingCardPrice};
  }
`;

const NavBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Field = styled.div`
  background-color: ${(props) => props.theme.SearchNavbarFieldBg};
  opacity: 0.8;
  border: 1px solid #e7e8ea;
  border-radius: 8px;
  height: 70px;
  padding: 10px 24px 0px;
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.SearchNavbarLabel};
`;

const FormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  font-family: "DM Sans", sans-serif;
  border: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  background-color: #3b71fe;
  border-radius: 10px;
  padding: 22px 42px;
  color: #ffffff;
`;

const Button = styled.button`
  border: none;
  border: 1px solid #e6e8ec;
  background-color: transparent;
  border-radius: 50%;
`;

// PASSENGER STYLES

const PassengerModal = styled.div`
  background-color: ${(props) => props.theme.TrendingCardBg};
  // color:${(props) => props.theme.ExploreCardTitle}
`;

const LineWrapper = styled.div`
  border-bottom: 1px solid #e6e8ec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 11px;
`;

const Type = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
  color: #777e91;
`;

const AgeType = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: #b1b5c4;
`;

const UserTotal = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
  margin-left: 12px;
  margin-right: 12px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectField = styled.div`
background-color:${(props) => props.theme.selectBg} ;
border-radius: 8px;
white-space:nowrap;
text-overflow:ellipsis;
font-weight: 500;
font-size: 18px;
line-height: 24px;
color:${(props) => props.theme.selectColor};
&:not(:last-child) {
    margin-right: 8px;
}
.css-b62m3t-container{
    // width:260px;
}
.css-319lph-ValueContainer {
    padding:0;
}

.css-6j8wv5-Input{
    padding:0;
    margin:0;
}
.css-tlfecz-indicatorContainer {
    padding:0;
}
.css-1s2u09g-control{
    min-height:19px;
    padding-top:px;
    background-color:transparent;
    border:transparent;
}
.css-1hb7zxy-IndicatorsContainer {
    display:none;
}
.css-14el2xx-placeholder {
    color:${(props) => props.theme.selectColor};
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}
.css-1okebmr-indicatorSeparator {
    background-color:transparent;
    border:transparent;
    margin:0;
}
.css-1f43avz-a11yText-A11yText{
  border:none;
}
.css-26l3qy-menu{
  background-color:white;
  opacity:1;
  z-index:9999;
}
.css-4ljt47-MenuList{
  z-index:5555;
}
.css-yt9ioa-option{
  background-color:${(props) => props.theme.selectBg} ;
}
.css-1s2u09g-control{
  background-color:${(props) => props.theme.selectBg} ;
}
`;

// ********************************************************
const options = [
  { value: "Dubai", label: "Dubai"},
  { value: "France", label: "France"},
  { value: "Bali", label: "Bali"},
  { value: "Turkey",label: "Turkey"},
  { value: "Malaysia",label: "Malaysia"}
];

const { Option } = components;
const IconOption = props => (
  <Option {...props}>
     <GrLocation style={{color:'#777E91', marginRight:'5px'}}/>
    {props.data.label}
  </Option>
);
// ***************************************************


const HotelListNavbar = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [adult, setAdult] = useState(1);
  const [infant, setInfant] = useState(0);
  const [children, setChildren] = useState(0);

  const locationRef = useRef();
  const checkInRef = useRef();
  const checkOutRef = useRef();

  useEffect(() => {
    locationRef.current.value = "Where are you from?";
    checkInRef.current.DefaultValue = "Add in";
    checkOutRef.current.DefaultValue = "Add in";
  });

  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(locationRef.current.props.value);
    console.log(checkOutRef.current.state.value);
    console.log(checkInRef.current.state.value);


    setTimeout(() => {
      navigate("/hotellist");
    }, 3000);
  }

  const handlePassengerModal2 = (el) => {
    console.log(el);
    if (el.target.className === "passenger") {
      el.target.className = "passenger modalAppear2";
    } else if (el.target.className === "passenger modalAppear2") {
      el.target.className = "passenger";
    }
  };
  // TODO: strelka va modal

  // *******************************************************
  return (
    <div className="container">
      <ListNavbar>
        <NavWrapper className="nav-wrapper">

          <button className="passenger" onClick={handlePassengerModal2}>
            <span className="passengerSpan">
              {adult + infant + children}
            </span>
            {t('passenger')} 
            <IoIosArrowDown />
          </button>

          <PassengerModal className="passenger-modal2">
            <LineWrapper className="line-wrapper">
              <Left>
                <Type className="text">{t('Adults')}</Type>
                <AgeType className="age">{t('13above')}</AgeType>
              </Left>
              <div>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setAdult(adult > 0 ? adult - 1 : 0);
                  }}
                >
                  <AiOutlineMinus style={{ color: "#84878B" }} />
                </Button>
                <UserTotal className="user-total">{adult}</UserTotal>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setAdult(adult + 1);
                  }}
                >
                  <AiOutlinePlus style={{ color: "#B1B5C4" }} />
                </Button>
              </div>
            </LineWrapper>

            <LineWrapper className="line-wrapper">
              <Left>
                <Type className="text">{t('Children')}</Type>
                <AgeType className="age">{t('ageTill12')}</AgeType>
              </Left>
              <div>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setChildren(children > 0 ? children - 1 : 0);
                  }}
                >
                  <AiOutlineMinus style={{ color: "#B1B5C4" }} />
                </Button>
                <UserTotal className="user-total">{children}</UserTotal>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setChildren(children + 1);
                  }}
                >
                  <AiOutlinePlus style={{ color: "#B1B5C4" }} />
                </Button>
              </div>
            </LineWrapper>

            <LineWrapper className="line-wrapper">
              <Left>
                <Type className="text">{t('Infants')}</Type>
                <AgeType className="age"> {t('under2')}</AgeType>
              </Left>
              <div>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setInfant(infant > 0 ? infant - 1 : 0);
                  }}
                >
                  <AiOutlineMinus style={{ color: "#B1B5C4" }} />
                </Button>
                <UserTotal className="user-total">{infant}</UserTotal>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    setInfant(infant + 1);
                  }}
                >
                  <AiOutlinePlus style={{ color: "#B1B5C4" }} />
                </Button>
              </div>
            </LineWrapper>
          </PassengerModal>
        </NavWrapper>

{/* FORM */}

        <form onSubmit={handleFormSubmit}>
          <FormInner>
            <NavBottom className="nav-bottom">
              <div className="div-box">
                <div className="search-content">
                  <SelectWrapper className="select-wrapper">
                    <Field className="field select-field">
                      <FieldLabel>{t('Location')}</FieldLabel>
                 
                      <SelectField>
                          <Select  ref={locationRef} 
                          placeholder={t('Where')}
                            options={options}
                            components={{ Option: IconOption }}
                           />
                      </SelectField>
                    </Field>

                    <CgArrowsExchange
                      style={{
                        backgroundColor: "#fff",
                        fontSize: "30px",
                        padding: "3px 3px",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "20px",
                        left: "320px",
                        zIndex: "99",
                      }}
                    />

                    <Field className="field check-field">
                      <FieldLabel> Check in</FieldLabel>
                      <DayPickerInput ref={checkInRef} placeholder={t('AddDate')}/>
                    </Field>

                    <CgArrowsExchange
                      style={{
                        backgroundColor: "#fff",
                        fontSize: "30px",
                        padding: "3px 3px",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "20px",
                        left: "580px",
                        zIndex: "99",
                      }}
                    />

                    <Field className="field check-field">
                      <FieldLabel> Check out</FieldLabel>
                      <DayPickerInput
                        ref={checkOutRef}
                        placeholder={t('AddDate')}
                      />
                    </Field>
                  </SelectWrapper>
                </div>
              </div>
            </NavBottom>

            <DivBox className="div-box">
              <SubmitButton variant="" type="submit">
              {t('Search')} 
              </SubmitButton>
            </DivBox>
          </FormInner>
        </form>
      </ListNavbar>
    </div>
  );
};

export default HotelListNavbar;

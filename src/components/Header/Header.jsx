import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import styled from "styled-components";
import "./header.css";
import { VscBellDot } from "react-icons/vsc";
import { Dropdown } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

// ********************************************************
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 40px;
  background-color: ${(props) => props.theme.HeaderBg};
  box-shadow: 0px -1px 4px #e2e2ea;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  button{
    color:${(props) => props.theme.SearchNavbarLabel};
    &::after{
      display:none;
    }
  }
`;

const Language = styled.div`
  margin-right: 17px;
  .dropdown-item{
    background:${(props) => props.theme.ModeSwitcherBg};
  }
  .dropdown-menu.show{
    background:${(props) => props.theme.ModeSwitcherBg};
    .dropdown-item{
      color:  ${(props) => props.theme.PlacesCardTitle};
    }
    .dropdown-item{
      background: ${(props) => props.theme.dropdownMenuShow};
    }
    .dropdown-item:hover{
      background: rgba(53, 57, 69, 0.2);
    }

    .dropdown-menu{
      position:relative;
    }
    .dropdown-item:active {
      background-image:url(../assets/img/checked.png);
      background-repeat:no-repeat;
      background-position:right 20px top 10px;
    }
`;

const Bell = styled.div`
position:relative;
  margin-right: 40px;
  color: ${(props) => props.theme.PlacesCardTitle};
  &::after{
    content:'';
    position:absolute;
    background-color:red;
    top:4px;
    left:13px;
    width:8px;
    height:8px;
    border-radius:50%;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Currency = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color:  ${(props) => props.theme.PlacesCardTitle};
  margin-right: 14px;
  .dropdown-menu{
    padding:2px;
    box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
    border:1px solid #3B3E44;
  }
  .dropdown-menu.show{
    background:${(props) => props.theme.ModeSwitcherBg};
    .dropdown-item{
      color:  ${(props) => props.theme.PlacesCardTitle};
    }
    .dropdown-item{
      background: ${(props) => props.theme.dropdownMenuShow};
    }
    .dropdown-item:hover{
      background: rgba(53, 57, 69, 0.2);
    }
    .dropdown-menu{
      position:relative;
    }
    .dropdown-item:active {
      // transition:all 0.4s ease;
      background-image:url(../assets/img/checked.png);
      background-repeat:no-repeat;
      background-position:right 20px top 6px;
    }
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  img{
    border-radius:50%;
  }
`;

const User = styled.div`
font-family: Roboto,sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #3B3E44;

    a{
      color:  ${(props) => props.theme.PlacesCardTitle};
      text-decoration:none;
      // padding:6px;
    }
    .dropdown-menu{
      padding:2px;
      box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
      border:1px solid #3B3E44;
      width:200px;
    }
    .dropdown-menu.show{
      background:${(props) => props.theme.ModeSwitcherBg};
      .dropdown-item{
        color:  ${(props) => props.theme.PlacesCardTitle};
      }
      .dropdown-item{
        background: ${(props) => props.theme.dropdownMenuShow};
      }
      .dropdown-item:hover{
        background: rgba(53, 57, 69, 0.2);
      }

      .dropdown-menu{
        position:relative;
      }
      .dropdown-item:active {
        // transition:all 0.4s ease;
        background-image:url(../assets/img/checked.png);
        background-repeat:no-repeat;
        background-position:right 20px top 8px;
      }
    }
`;

const Logo = styled.div`
  a{
    font-weight: bold;
    font-size: 26px;
    line-height: 27px;
    color: ${(props) => props.theme.Footerh4};
    text-decoration:none;
  }

  img {
    width: auto;
    margin-right:5px;
  }
`;


const Header = () => {

  const {t} = useTranslation();

  const [lang, setLang] = useState(t("en"));
  const [currency, setCurrency] = useState("USD");

  const handleCurrency = (el) => {
    setCurrency(el.target.innerText);
  };


  // *****************************************************************
  return (
    <HeaderSection>
      <Logo>
        <Link to="/">
        <img src="../../assets/img/favicon.png" alt="logo" width="40" height="38" />
        TripGuide
      </Link>
      </Logo>


      <Navbar className="header-navbar">
        <Currency>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" eventKey="1">
              {currency}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                eventKey="2"
                onClick={handleCurrency}
                menuVariant ='none'
              >
                RUB
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                eventKey="3"
                onClick={handleCurrency}
              >
                SUM
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                eventKey="1"
                onClick={handleCurrency}
              >
                USD
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Currency>

        <Language>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <img
                className="language-img"
                src={`../../assets/img/${lang}`}
                alt="flag"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
               className='no-triangle'
                href="#/action-1"
                eventKey="1"
                onClick={() =>
                  i18next.changeLanguage("en") && setLang("flag-us.png")
                }
              >
                <img
                  className="language-img"
                  src="../../assets/img/flag-us.png"
                  alt="language"
                />
                English
              </Dropdown.Item >
              <Dropdown.Item
               className='no-triangle'
                href="#/action-2"
                eventKey="2"
                onClick={() =>
                  i18next.changeLanguage("ru") && setLang("flag-russian.jpg")
                }
              >
                <img
                  className="language-img"
                  src="../../assets/img/flag-russian.jpg"
                  alt="language"
                />
                Russian
              </Dropdown.Item>
              <Dropdown.Item
               className='no-triangle'
                href="#/action-3"
                eventKey="3"
                onClick={() =>
                  i18next.changeLanguage("uz") && setLang("flag-uzbek.jpg")
                }
              >
                <img
                  className="language-img"
                  src="../../assets/img/flag-uzbek.jpg"
                  alt="language"
                />
                Uzbek
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Language>

        <Bell>
          <VscBellDot
          style = {{color:`#84878B
           ${(props) => props.theme.Bell}
          ` , fontSize:'22px'}}
           />
        </Bell>

        <Profile>
          <Avatar>
            <img src="../../assets/img/profile-pic.jpg" alt="avatar pic" />
          </Avatar>
          <User>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Delowar <IoIosArrowDown />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" eventKey="1">
                  <Link to="/profile"> 
                  <BiUserCircle  style = {{marginRight:'15px' , fontSize:'20px'}}
                   />
                  My Profile
                   </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" eventKey="2">
                  <VscSignOut
                   style = {{marginRight:'15px' , fontSize:'20px'}}
                  />
                  Sign put
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </User>
        </Profile>
      </Navbar>
    </HeaderSection>
  );
};

export default Header;

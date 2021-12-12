import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./footer.css";
import { BsFillSunFill } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

// ***************************************************************
const FooterSection = styled.footer`
  height: 602px;
  background-color:${(props) => props.theme.FooterBg};
  width: 100%;
  padding: 224px 0 152px 0;
  // margin: 0 58px;
  // color:${(props) => props.theme.FooterColor}
`;

const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 58px;
`;

const LogoBox = styled.div`
  width: 254px;
  // margin-right: 152px;
`;

const Logo = styled.div`
  margin-bottom: 16px;
  a{
      font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  color: ${(props) => props.theme.Footerh4};
  text-decoration:none;
  }

  img {
    width: auto;
    margin-right:5px;
  }
`;

const ModeSwitcher = styled.div`
  width: 148px;
  border: 0.5px solid #c4bfbf;
  display: flex;
  padding: 4px;
  background-color:${(props) => props.theme.ModeSwitcherBg};
  border-radius: 10px;
  button {
    text-decoration: none;
    display: block;
    font-size: 20px;
    line-height: 15px;
    color: #a6a6a6;
    padding: 9px 24px;
    border: none;
    border-radius: 8px;
  }
`;
const LogoBoxText = styled.p`
  font-family: DM Sans;
  margin: 0;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
`;

const ServicesBox = styled.div`
  // margin-right: 153px;
`;
const SupportBox = styled.div`
  // margin-right: 150px;
`;

const FooterTitle = styled.h4`
  color:${(props) => props.theme.Footerh4};
  margin: 0;
  margin-bottom: 19px;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84878b;
`;


// *******************************************************************
const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <>
    <FooterSection>
        <div className="container">
          <FooterInnerWrapper className="footer-inner-wrapper">
            <LogoBox>
              <Logo>
                <Link to="/">
                  <img src="../../assets/img/favicon.png" alt="logo" width='40' height='38'/>
                  TripGuide
                </Link>
              </Logo>

              <LogoBoxText>
                    {t('FooterText')}
              </LogoBoxText>

              <ModeSwitcher className="mode-switcher">
                <button
                  className="light light-active"
                  onClick={() =>
                    toggleTheme(theme === "light" ? "light" : "light")
                  }
                >
                  <BsFillSunFill className="sun"
                    style={{  fontSize: "20px", color: "#3B3E44"}}
                  />
                </button>
                <button
                  className="dark"
                  onClick={() =>
                    toggleTheme(theme === "light" ? "dark" : "dark")
                  }
                >
                  <FiMoon  style={{fontSize: "20px", color: "#effe09"}}/>
                </button>
              </ModeSwitcher>

            </LogoBox>

            <ServicesBox>
              <FooterTitle className="footer-title"> {t('Services')}</FooterTitle>
              <FooterList className="footer-list">
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                  {t('TravelBooking')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('FlightBooking')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                   {t('CarBooking')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Fivestar')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Traveling')}
                  </FooterLink>
                </ListItem>
              </FooterList>
            </ServicesBox>

            <SupportBox>
              <FooterTitle className="footer-title">{t('Support')}</FooterTitle>
              <FooterList className="footer-list">
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Account')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Legal')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Contact')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                   {t('Terms')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                   {t('Privacy')}
                  </FooterLink>
                </ListItem>
              </FooterList>
            </SupportBox>

            <div>
              <FooterTitle className="footer-title">  {t('Business')}</FooterTitle>
              <FooterList className="footer-list">
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Success')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('About')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Blog')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('Information')}
                  </FooterLink>
                </ListItem>
                <ListItem className="footer-item">
                  <FooterLink className="footer-link" href="#">
                    {t('TravelGuide')}
                  </FooterLink>
                </ListItem>
              </FooterList>
            </div>
          </FooterInnerWrapper>
        </div>
    </FooterSection>
    </>

  );
};

export default Footer;

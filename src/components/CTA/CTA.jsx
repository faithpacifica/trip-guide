import React from 'react';
import "./cta.css";
import styled from "styled-components";
import { useRef } from 'react';

// *************************************************************************
const CTASection = styled.section`
padding:62px 90px;
position:relative;
top:125px;
background-image:url(../../assets/img/cta-bg.png);
background-repeat:no-repeat;
background-size:cover;
background-color: #EE6D52;
border-radius: 16px;
background-color: linear-gradient(110.89deg, rgba(207, 241, 255, 0.8) 30.76%, rgba(255, 255, 255, 0) 63.61%);
`;

const InnerBox = styled.div`
display:flex;
align-items:end;
justify-content: space-between;
`;

const CTAtitle = styled.h3`
margin:0;
margin-bottom:16px;
font-weight: 800;
font-size: 44px;
line-height: 52px;
color: #FFFFFF;
`;

const CTAContent = styled.div`
// margin-right:131px;
`;

const CTAContentText = styled.p`
font-family: Roboto,sans-serif;
margin:0;
width:370px;
font-size: 16px;
line-height: 28px;
opacity: 0.88;
color:#fff;
`;

const InputField = styled.div`
display:flex;
width:488px;
position:relative;
padding:8px;
background-color: #FCFCFD;
box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
border-radius: 4px;
`;

const Input = styled.input`
font-family: Roboto, sans-serif;
width:100%;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color:: #B1B5C4;;
padding:18px 0 14px 18px;
border:none;
outline:none;
`;

const Button = styled.button`
position:absolute;
right:8px;
font-family: Roboto,sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;
padding:17px 31px;
color: #FFFFFF;
background-color: #353945;
box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
border-radius: 4px;
border:none;
`;

// ********************************************************************
const CTA = () => {

    const subscribeRef = useRef();

    const handleSubmit = (el)=>{
        el.preventDefault();
        console.log(subscribeRef.current.value);
    } 


    return (
        <div className=" container">
        <CTASection className="cta__section">
            <InnerBox className="cta-inner-box">
                <CTAContent className="cta-content">
                    <CTAtitle>Get our pro offers </CTAtitle>
                    <CTAContentText>Create a visual identity for your company, and an overall brand</CTAContentText>
                </CTAContent>
                <form action="#" onSubmit = {handleSubmit}>
                    <InputField className="input-field">
                        <Input type="text"  ref = { subscribeRef} placeholder='Type your email here'/>
                        <Button type="submit">Subscribe</Button>
                    </InputField>
                </form>
            </InnerBox>
        </CTASection>
        </div>
    );
};

export default CTA;
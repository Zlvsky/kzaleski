import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';

import Phone from '../assets/images/icons/phone.svg'
import Hands from '../assets/images/icons/hands.svg'
import Mail from '../assets/images/icons/mail.svg'

const MyFooter = styled.div`
  background-color: #2e2e2e;
`
const FooterWrap = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 60px 0;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
const Copyright = styled.span`
  position: relative;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  color: #706f83;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: .23em;
  padding-bottom: 20px;
`
const FooterColumn = styled.div`
  width:30%;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`
const FooterTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`
const FooterA = styled.a`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
`
const FooterButton = styled.span`
display: block;
padding: 8px 24px;
background-color: transparent;;
color: #fff;
text-decoration: none;
border: 2px solid #ef5f63;
font-size: 16px;
line-height: 26px;
font-weight: 500;
border-radius: 25px;
margin-top: 30px;
cursor: pointer;
transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0,0,.2,1);
&:hover {
  background-color: #ef5f63;
  color: #fff;
}
`
const Footer = () => {
  return (
    <MyFooter>
        <FooterWrap>
          <FooterColumn>
            <Phone width="65" height="65"/>
            <FooterTitle>Zadzwoń</FooterTitle>
            <FooterA href="tel:505709535">+48 505 709 535</FooterA>
          </FooterColumn>
          <FooterColumn>
            <Hands width="65" height="65"/>
            <FooterTitle>Zainteresowany?</FooterTitle>
            <Link to={'/kontakt'}><FooterButton>Kontakt</FooterButton></Link>
          </FooterColumn>
          <FooterColumn>
            <Mail width="65" height="65"/>
            <FooterTitle>Napisz</FooterTitle>
            <FooterA href="mailto:zlvsky@icloud.com">zlvsky@icloud.com</FooterA>
          </FooterColumn>
        </FooterWrap>
        <Copyright>Krzysztof Zaleski © 2021 Wszelkie prawa zastrzeżone</Copyright>
    </MyFooter>
  )
}

export default Footer

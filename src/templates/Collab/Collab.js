import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import { Link } from "gatsby"

import CollabVector from '../../assets/images/vectors/collab.svg'



const CollabWrap = styled.div`
  background-color: #F7F7F7;
`
const CollabContainer = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto 0 auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 8rem 0;
@media only screen and (max-width: 768px) {
  display: block;
  padding: 0;
}
`
const CollabLeft = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const CollabRight = styled.div`
  width: 50%;
  padding: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const CollabHeader = styled.h2`
font-size: 3.125rem;
color: #000;
line-height: 1.125;
font-weight: 700;
`
const CollabText = styled.p`
font-size: 1.25rem;
color: #000;
line-height: 1.15;
font-weight: 400;
`
const CollabButton = styled.button`
display: block;
padding: 8px 24px;
background-color: transparent;;
color: #ef5f63;
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
const Collab = () => {

  return (
    <CollabWrap>
      <CollabContainer>
        <CollabLeft>
          <CollabVector />
        </CollabLeft>
        <CollabRight>
          <CollabHeader>Stwórzmy coś razem!</CollabHeader>
          <CollabText>Jeżeli jesteś zainteresowany, bądź masz jakieś pytania, skontaktuj się ze mną</CollabText>
          <Link to={'/kontakt'}><CollabButton>Skontaktuj się</CollabButton></Link>
      </CollabRight>
      </CollabContainer>
    </CollabWrap>
  )
}


export default Collab;

import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import { Link } from "gatsby"

import Analitycs from '../../assets/images/vectors/analitycs.png'
import Client from '../../assets/images/vectors/client.png'
import Coding from '../../assets/images/vectors/coding.png'
import Design from '../../assets/images/vectors/design.png'
import Testing from '../../assets/images/vectors/testing.png'
import Web from '../../assets/images/vectors/web.png'


const HowWrap = styled.div`
  height: 100vh;
  background-color: #000000;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`
const HowContainer = styled.div`
position: relative;
max-width: 1400px;
margin: 0 auto 0 auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 768px) {
  height: auto;
}
`
const HowBox = styled.div`
  width: 100%;
  height: 700px;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 0 10px;
  }
`
const HowTitle = styled.h1`
  font-weight: 700;
  line-height: 33px;
  font-size: 26px;
  color: #fff;
`
const ColumnsWrap = styled.div`
display: inline-flex;
width: 100%;
margin-top: 80px;
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
  margin: 20px 0;

}
`
const HowColumns = styled.div`
  width: 23%;
  margin: 0 10px;
  &:hover .number {
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;

  }
`
const Numbers = styled.span`
transition-property: color;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0,0,.2,1);
font-weight: 700;
font-size: 75px;
color: #2b2b2b;
`
const ColumnTitle = styled.h1`
font-size: 25px;
font-weight: 700;
color: #fff;
`
const ColumnText = styled.p`
font-size: 17px;
font-weight: 400;
color: #fff;
`
const ColumnImg = styled.img`
  display: block;
  height: 250px;
  object-fit: contain;
  margin: 0 auto 0;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
`
const HowIWork = () => {

  return (
    <HowWrap>
      <HowContainer>
        <HowBox>
          <HowTitle>Jak wygląda proces tworzenia stron.</HowTitle>
          <ColumnsWrap>
            <HowColumns>
              <Numbers className="number" >1.</Numbers>
              <ColumnImg src={Client} />
              <ColumnTitle>Zebranie informacji.</ColumnTitle>
              <ColumnText>Ustalenie celu strony, grupy docelowych odbiorców oraz tego, co strona ma zawierać.</ColumnText>
            </HowColumns>
          <HowColumns>
            <Numbers className="number">2.</Numbers>
            <ColumnImg src={Coding} />
            <ColumnTitle>Projektowanie strony.</ColumnTitle>
            <ColumnText>Ustalenie motywu strony, tworzenie rzeczywistej witryny, łączenie części elementów graficznych z funkcjonalnością, aby strona wyglądała atrakcyjnie oraz była praktyczna.</ColumnText>
          </HowColumns>
          <HowColumns>
            <Numbers className="number">3.</Numbers>
            <ColumnImg src={Testing} />
            <ColumnTitle>Uzupełnienie treści i pozycjonowanie.</ColumnTitle>
            <ColumnText>Po etapie projektowania strony, przychodzi czas na uzupełnienie jej teksktami pod pozycjonowanie, istotnymi informacjami oraz resztą niezbędnych elementów.</ColumnText>
          </HowColumns>
          <HowColumns>
            <Numbers className="number">4.</Numbers>
            <ColumnImg src={Analitycs} />
            <ColumnTitle>Utrzymanie i rozwój</ColumnTitle>
            <ColumnText>Finalnie zapewniam pomoc w administrowaniu oraz w podstawowej samodzielnej obsłudze i rozwoju strony.</ColumnText>
          </HowColumns>
          </ColumnsWrap>
        </HowBox>
      </HowContainer>
    </HowWrap>
  )
}


export default HowIWork;

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import { InView  } from 'react-intersection-observer';

import Js from '../../assets/images/hero/javascript.png'
import NodeJs from '../../assets/images/hero/nodejs.png'
import ReactIcon from '../../assets/images/hero/physics.png'
import Woo from '../../assets/images/hero/woocommerce.png'
import Wordpress from '../../assets/images/hero/wordpress.png'
import IconArrow from "../../assets/images/icons/iconSvg.svg";

import Analitycs from '../../assets/images/vectors/analitycs.png'
import Client from '../../assets/images/vectors/client.png'
import Coding from '../../assets/images/vectors/coding.png'
import Design from '../../assets/images/vectors/design.png'
import Testing from '../../assets/images/vectors/testing.png'
import Web from '../../assets/images/vectors/web.png'



const iconAnimate = keyframes`
0% {   transform: rotate(90deg); opacity: 0;}
25% {  transform: rotate(0deg); opacity: 1;}
50% {  transform: rotate(0deg); opacity: 1;}
75% {  transform: rotate(0deg); opacity: 1}
100% { transform: rotate(-270deg); opacity: 0;}
`
const arrowAnimate = keyframes`
0% {   opacity: 0; transform: translateZ(0);}
40% {  opacity: 1;}
80% {  opacity: 0; transform: translate3d(0,20px,0);}
100% { opacity: 0;}
`


const HeroWrap = styled.div`
  height: 120vh;
  width: 100vw;
  position: relative;
  .active-icon {
  display: block;
  animation: ${iconAnimate} 2s ease-in;
  animation-iteration-count: 1;
}
  .deactive-icon {
  display: none;
}
.icon-arrow {
  animation: ${arrowAnimate} 2s infinite;
}
#vectorOne {
  top: 0%;
  left: 100%;
}
#vectorTwo {
  top: 30%;
  right: 50%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
#vectorThree {
  top: 70%;
  left: 10%;
}
#vectorFourth {
  top: 0%;
  left: 0%;
}
#vectorFifth {
  top: 30%;
  left: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
#vectorSix {
  top: 70%;
  left: 10%;
}
@media only screen and (max-width: 768px) {
  height: 92vh;
  width: 100%;
}
`
const GridWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(5, 1fr);
`
const LeftImages = styled.div`
grid-row: 1;
grid-column: 1;
`
const RightImages = styled.div`
grid-row: 1;
grid-column: 5;
`
const VectorImage = styled.img`
  height: 300px;
  object-fit: cover;
  position: sticky;
  @media only screen and (max-width: 768px) {
    height: 200px;
  }
`

const HeroContainer = styled.div`
position: relative;
grid-row: 1;
grid-column: 2 / 5;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media only screen and (max-width: 768px) {
  grid-column: 1 / 5;
  width: 100vw;
  padding: 0 15px;
}
`
const HeroTitle = styled.span`
margin-bottom: 20px;
top: 30%;
font-size: clamp(1.75rem,4.35vw,6.11rem);
transform: translateY(0);
font-weight: lighter;
line-height: 1;
transition: all 0.2s ease-in-out;
@media only screen and (max-width: 768px) {
  font-size: 40px;
}
`
const HeroSubTitle = styled.h1`
justify-content: center;
align-items: center;
text-align: center;
top: 50%;
margin: 0;
font-size: clamp(1.25rem,2.35vw,1.25rem);
transform: translateY(0);
font-weight: lighter;
transition: all 0.2s ease-in-out;
`
const IconsWrap = styled.div`
display: inline-flex;
border: 2px #7a7a7a solid;
border-radius: 50%;
width: 60px;
height: 60px;
margin-left: 30px;
`
const IconImg = styled.img`
padding: 8px;
}
`
const ArrowWrap = styled.div`
display: flex;
justify-content: center;
position: absolute;
bottom: calc(120vh - 96vh);
left: 50%;
border-radius: 50%;
width: 2rem;
height: 2rem;
border: 1.5px solid #111;
transform: translate(-50%,-50%);
z-index: 2;
cursor: pointer;
transition: opacity 0.2s ease-in-out;
@media only screen and (max-width: 768px) {
  display: none;
}
`

class Hero extends Component {
  state = {
    stateIndex: 0,
    itemStates: [
      false, false, false, false, false
    ],
  };
  refTitle = React.createRef();
  refSubTitle = React.createRef();
  refArrowIcon = React.createRef();

  refVectorOne = React.createRef();
  refVectorTwo = React.createRef();
  refVectorThree = React.createRef();
  refVectorFour = React.createRef();
  refVectorFive = React.createRef();
  refVectorSix = React.createRef();

  componentDidMount() {
    let { stateIndex } = this.state;
    let { itemStates } = this.state;
  this.interval = setInterval(() => {
    if (itemStates.length == stateIndex) {
      stateIndex = 0;
    }
    itemStates = itemStates.map( (x, index, arr) => {
        if(index == stateIndex) {
          return arr[index] = true;
        } else {
          return arr[index] = false;
        }
      });
      this.setState({ itemStates: itemStates })
      stateIndex++;
  }, 2000);
  window.addEventListener('scroll', this.heroScroll);
}
heroScroll = (event) => {
  let titleRef = this.refTitle.current;
  let subTitleRef = this.refSubTitle.current;
  let arrowIconRef = this.refArrowIcon.current;

  let vectorOne = this.refVectorOne.current;
  let vectorTwo = this.refVectorTwo.current;
  let vectorThree = this.refVectorThree.current;
  let vectorFour = this.refVectorFour.current;
  let vectorFive = this.refVectorFive.current;
  let vectorSix = this.refVectorSix.current;
  let pageScroll = window.scrollY;

  if(pageScroll < 500) {

    titleRef.style.transform = `translateY(-${pageScroll}px)`;
    subTitleRef.style.transform = `translateY(-${pageScroll / 2}px)`;

    vectorOne.style.transform = `translateX(-${pageScroll}px)`;
    vectorTwo.style.transform = `translateX(-${pageScroll}px)`;
    vectorThree.style.transform = `translateX(-${pageScroll}px)`;

    vectorFour.style.transform = `translateX(${pageScroll}px)`;
    vectorFive.style.transform = `translateX(${pageScroll}px)`;
    vectorSix.style.transform = `translateX(${pageScroll}px)`;
    if (pageScroll < 100) {
      titleRef.style.opacity = 1;
      subTitleRef.style.opacity = 1;
      arrowIconRef.style.opacity = 1;
      titleRef.style.lineHeight = 1;


    } else if(pageScroll >= 100 && pageScroll < 200) {
      titleRef.style.opacity = 0.5;
      subTitleRef.style.opacity = 0.5;
      arrowIconRef.style.opacity = 0.5;
      titleRef.style.lineHeight = 1.3;
    } else if (pageScroll >= 200) {
      titleRef.style.opacity = 0;
      arrowIconRef.style.opacity = 0;
      subTitleRef.style.opacity = 0;
      titleRef.style.lineHeight = 1.6;
    }
  }
}
  componentWillUnmount() {
  clearInterval(this.interval);
  window.removeEventListener('scroll', this.heroScroll);
}
  render() {
    return (
      <HeroWrap ref={this.refWrap}>
        <GridWrap>
          <LeftImages>
            <VectorImage src={Design} id='vectorOne' ref={this.refVectorOne}/>
            <VectorImage src={Testing} id='vectorTwo' ref={this.refVectorTwo}/>
            <VectorImage src={Web} id='vectorThree' ref={this.refVectorThree}/>
          </LeftImages>
        <HeroContainer >
          <HeroTitle ref={this.refTitle} >Cześć, tu Krzyś
            <IconsWrap>
              <IconImg src={Js} className={`${this.state.itemStates[0] ? 'active-icon' : 'deactive-icon'}`}/>
              <IconImg src={NodeJs} className={`${this.state.itemStates[1] ? 'active-icon' : 'deactive-icon'}`}/>
              <IconImg src={ReactIcon} className={`${this.state.itemStates[2] ? 'active-icon' : 'deactive-icon'}`}/>
              <IconImg src={Woo} className={`${this.state.itemStates[3] ? 'active-icon' : 'deactive-icon'}`}/>
              <IconImg src={Wordpress} className={`${this.state.itemStates[4] ? 'active-icon' : 'deactive-icon'}`}/>
            </IconsWrap>
            <br /> Tworzę strony internetowe <br /> oraz aplikacje webowe</HeroTitle>
          <HeroSubTitle ref={this.refSubTitle}>Strony wizytówki, sklepy internetowe, pozycjonowanie. <br /> Łapy, Białystok, Podlasie</HeroSubTitle>
        </HeroContainer>
        <RightImages>
          <VectorImage src={Analitycs} id='vectorFourth' ref={this.refVectorFour}/>
          <VectorImage src={Client} id='vectorFifth' ref={this.refVectorFive}/>
          <VectorImage src={Coding} id='vectorSix' ref={this.refVectorSix}/>
        </RightImages>
        </GridWrap>
        <ArrowWrap ref={this.refArrowIcon}>
          <IconArrow />
        </ArrowWrap>
      </HeroWrap>

    )
  }

}

export default Hero;

import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

import Mockup from '../../assets/images/mockup.png'
import MockupOne from '../../assets/images/mockup-1.png'
import MockupTwo from '../../assets/images/mockup-2n.png'
import MockupThree from '../../assets/images/mock-3.png'

const WhatWrap = styled.div`
  height: 300vh;
  width: 100vw;
  position: relative;
  background-color: #F7F7F7;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`
const WhatContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`
const WhatLeft = styled.div`
position: sticky;
height: 100%;
width: 40%;
@media only screen and (max-width: 768px) {
  width: 100%;
  position: relative;
}
`
const WhatRight = styled.div`
position: sticky;
height: 100%;
width: 60%;
@media only screen and (max-width: 768px) {
  display: none;
}
`
const WhatTitle = styled.h1`
position: relative;
display: block;
justify-content: center;
align-items: center;
text-align: left;
top: 30%;
font-size: clamp(1.75rem,2.35vw,2.75rem);
transform: translateY(0);
font-weight: 700;
`
const WhatSpan = styled.span`
position: absolute;
display: block;
justify-content: center;
align-items: center;
text-align: left;
font-size: clamp(0.75rem,1.35vw,1rem);
transform: translateY(0);
font-weight: 300;
line-height: 1.4;
letter-spacing: 1px;
@media only screen and (max-width: 768px) {
  position: relative;
}
`
const WhatButton = styled.button`
display: block;
padding: 10px 45px;
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

const MockupContainer = styled.div`
  position: sticky;
  background-image: url(${Mockup});
  top: 25%;
  background-size: contain;
  background-repeat: no-repeat;
`
const MockupImg = styled.img`
position: sticky;
top: 0;
left: 0;
bottom: 0;
right: 0;
height: 100%;
width: 100%;
z-index: -1;
`
const LeftContainer = styled.div`
position: sticky;
top: 25%;
display: block;
@media only screen and (max-width: 768px) {
  top: 0;
  position: relative;
}
`

class WhatIDo extends Component {
  state = {
    isFirst: true,
    isSecond: false,
    isThird: false
  }
  refWrap = React.createRef();
  refContent = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll);
  }
  updateScroll = (event) => {
    let wrapHeight = this.refWrap.current.offsetHeight;
    let contentHeight = this.refContent.current.offsetHeight;
    let contentTop = this.refContent.current.offsetTop;
    let scrollPercentage = ((contentTop + contentHeight) / wrapHeight) * 100;
      if(scrollPercentage > 0 && scrollPercentage < 33) {
          this.setState({ isFirst: true});
          this.setState({ isSecond: false});
          this.setState({ isThird: false});
        } else if (scrollPercentage > 33 && scrollPercentage < 66) {
          this.setState({ isFirst: false});
          this.setState({ isSecond: true});
          this.setState({ isThird: false});
          }
          else if (scrollPercentage > 66 && scrollPercentage < 100) {
            this.setState({ isFirst: false});
            this.setState({ isSecond: false});
            this.setState({ isThird: true});
            }
}
    componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScroll);
    }


  render() {
    return (
      <WhatWrap ref={this.refWrap}>
        <WhatContainer>
          <WhatLeft>
            <LeftContainer ref={this.refContent}>
            <WhatTitle   className={` scroll-item-${this.state.isFirst ? 'active' : 'deactive'}`}> Tworzenie <br /> stron internetowych</WhatTitle>
            <WhatSpan className={` scroll-item-${this.state.isFirst ? 'active' : 'deactive'}`}> Projektuj?? graficznie oraz <strong> tworz?? strony internetowe. </strong> Strona internetowa to wizyt??wka <strong> Twojej firmy </strong> w internecie, dlatego stworzenie <strong> zoptymalizowanej, </strong> <strong> czytelnej </strong> i przyjemnej dla oka strony to wa??ny element zaistnienia w sieci. Dowiedz si?? wi??cej co mog?? zaoferowa??. <Link to={'/oferta'}><WhatButton>Przejd??</WhatButton></Link></WhatSpan>
            </LeftContainer>
            <LeftContainer>
            <WhatTitle ref={this.refContent2} className={` scroll-item-${this.state.isSecond ? 'active' : 'deactive'}`}> Tworzenie <br /> Sklep??w internetowych</WhatTitle>
            <WhatSpan className={` scroll-item-${this.state.isSecond ? 'active' : 'deactive'}`}> Zajmuj?? si?? r??wnie?? <strong> tworzeniem sklep??w internetowych </strong> na silniku WooCommerce. Stworzenie <strong> sklepu internetowego </strong> przypomina uk??adanke z??o??on?? z poszczeg??lnych element??w przez kt??re ch??tnie Ciebie przeprowadz??: od konceptu sklepu, po wdra??anie produkt??w, p??atno??ci oraz ustalenie docelowej grupy odbiorc??w. <strong> Sklepy internetowe,</strong> kt??re tworz?? s?? <strong> ??atwo zarz??dzalne</strong>, dlatego przysz??e rozwijanie sklepu nie b??dzie nios??o za sob?? problem??w.
            <Link to={'/oferta'}><WhatButton>Przejd??</WhatButton></Link>
          </WhatSpan>
            </LeftContainer>
            <LeftContainer>
            <WhatTitle ref={this.refContent3} className={` scroll-item-${this.state.isThird ? 'active' : 'deactive'}`}> Pozycjonowanie <br /> stron internetowych</WhatTitle>
            <WhatSpan className={` scroll-item-${this.state.isThird ? 'active' : 'deactive'}`}>Do <strong> ka??dej realizacji </strong> strony internetowej, b??d?? sklepu oferuj?? podstawowe pozycjonowanie, dzi??ki czemu witryna b??dzie widoczna w wyszukiwarce, a Twojej firmie zapewni to:
              <br /> <br />
              <strong>- Zwi??kszenie liczby wizyt w sklepie internetowym, b??d?? na stronie</strong>
              <br />
              <strong>- Zwi??kszenie liczby telefon??w do firmy </strong>
              <br />
              <strong>- Zwi??kszenie rozg??osu firmy </strong>
              <Link to={'/oferta'}><WhatButton>Przejd??</WhatButton></Link>
            </WhatSpan>
            </LeftContainer>
        </WhatLeft>

        <WhatRight>
          <MockupContainer>
            <MockupImg src={MockupOne} className={` scroll-image-${this.state.isFirst ? 'active' : 'deactive'}`}/>
            <MockupImg src={MockupTwo} className={` scroll-image-${this.state.isSecond ? 'active' : 'deactive'}`}/>
            <MockupImg src={MockupThree} className={` scroll-image-${this.state.isThird ? 'active' : 'deactive'}`}/>

          </MockupContainer>
        </WhatRight>
        </WhatContainer>
      </WhatWrap>
    )
  }

}

export default WhatIDo;

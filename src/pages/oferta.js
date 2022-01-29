import React from "react"
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import styled from 'styled-components'
import { Link } from 'gatsby';


import Bg from '../assets/images/background.png'
import Check from '../assets/images/icons/check.svg'
import Servicesimg from '../assets/images/service-1.jpg'
import Servicesimg2 from '../assets/images/service-2.jpg'

import Plan1 from '../assets/images/vectors/plan-1.jpg'
import Plan2 from '../assets/images/vectors/plan-2.jpg'
import Plan3 from '../assets/images/vectors/plan-3.jpg'



const ServicesSection = styled.section`
  background-image: url('${Bg}');

  .AboutSecond{
    padding: 0 0 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`
const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 53px;
  color: #000;
  padding: 9rem 0 1rem 0;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`


const ServicesContainer = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto 0 auto;
height: 100%;
display: flex;
justify-content: center;
padding: 1rem 0 0 0;
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
}


`
const ServicesLeft = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-top: 150px;
  }
`
const ServicesRight = styled.div`
  width: 50%;
  padding: 5% 0 5% 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const ServicesRight2 = styled.div`
  width: 50%;
  padding: 5% 0 5% 0;
  @media only screen and (max-width: 768px) {
    display: none;
    width: 100%;
  }
`
const ServicesHeader = styled.h2`
font-size: 1.5rem;
color: #000;
line-height: 1.125;
font-weight: 700;
top: 13%;
position: relative;
`
const ServicesText = styled.p`
font-size: 1.1rem;
color: #000;
line-height: 1.625;
font-weight: 400;
`
const ServicesButton = styled.button`
display: block;
padding: 8px 24px;
background-color: #ef5f63;
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
  background-color: #d65659;
  color: #fff;
}
`

const ImgWrap = styled.div`
  position:absolute;
  top:0;
  margin-top: -80px;
  text-align: right;
  @media only screen and (max-width: 768px) {
    right: 10%;
  }
`
const ServicesImg = styled.img`
  vertical-align: middle;
  display: inline-block;
  width: 700px;
  height: auto;
  max-width: 100%;
  border: none;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }
`
const ImgWrap2 = styled.div`
  text-align: left;
`
const ServicesImg2 = styled.img`
  vertical-align: middle;
  display: inline-block;
  width: 500px;
  height: auto;
  max-width: 100%;
  border: none;
  object-fit: cover;
`

const BlackSection = styled.div`
  background-color: #000;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    .mobile100 {
      width: 100%;
    }
  }
`
const BlackContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0 10px;
  }
`
const BlackContainer2 = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 0 10px;
  }
`
const PriceSection = styled.div`
  background-image: url('${Bg}');
  margin-top: 100px;
`
const PriceHeader = styled.div`
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 600;
  font-size: 3.5rem;
  margin-bottom: 10px;
`
const PriceParagraph = styled.div`
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0px;
`
const PriceContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 30px auto 30px auto;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    padding: 0 15px;
  }
`
const PriceColumn = styled.div`
  width: 30%;
  padding: 0 5%;
  margin: 0 1%;
  height: 100%;
  box-shadow: 0px 0px 30px -5px rgb(0 15 35 / 15%);
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  transition-property: all;
      transition-duration: .3s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
  &:hover {
    box-shadow: 0px 0px 30px 10px rgb(0 15 35 / 15%);
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`
const ColumnHeader = styled.h2`
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 10px;
`
const ColumnImgWrap = styled.div`
  width: 100%;
  text-align: center;
`
const ColumnImg = styled.img`
  vertical-align: middle;
  display: inline-block;
  height: 100px;
  max-width: 100%;
  border: none;
  object-fit: cover;
`
const ColumnPrice = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  display: block;
  text-align: center;
  color: #000;
  margin: 20px 0;
`
const ColumnParagraph = styled.p`
  color: #7a7c7d;
  font-size: 1.1rem;
  font-weight: 400;
  display: block;
  text-align: center;
  margin-bottom: 50px;
`
const ColumnButtonCommon = styled.button`
  display: block;
  position: absolute;
  bottom: 5%;
  padding: 10px 45px;
  background-color: transparent;;
  color: #ef5f63;
  text-decoration: none;
  border: 2px solid #ef5f63;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  border-radius: 25px;
  cursor: pointer;
  margin: 0 40px;
  transition-property: all;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
  &:hover {
    background-color: #ef5f63;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    margin: 0 auto;
  }
`

const OfertaPage = () => {
  return (
  <MainTemplate>
  <ServicesSection>
    <ServicesTitle>Potrzebujesz strony internetowej?</ServicesTitle>
    <ServicesContainer>
      <ServicesLeft>
        <ServicesHeader>Stworzę dla Twojej firmy responsywną, przyciągającą uwagę i czytelną strone internetową, lub łatwo zarządzalny sklep internetowy</ServicesHeader>
      </ServicesLeft>
      <ServicesRight>
        <ServicesText>
          <strong class="colorful">Strony internetowe</strong> które wykonuję spełniają standardy, dlatego śmiało można je nazwać <strong class="colorful">'nowoczesnymi.'</strong> Zależy mi na jakości pracy, dlatego też każdy projekt tworzony jest indywidualnie pod potrzeby mojego klienta, a dobrze zaprojektowana strona pomoże w <strong class="colorful"> zwiększenie potencjalnych klientów </strong> co przekłada się na <strong class="colorful"> rozwój firmy </strong>.
            Firma która nie istnieje w sieci, często nie jest brana pod uwagę. <strong class="colorful"> Strona internetowa </strong> to idealne rozwiązanie, aby zdobyć zaufanie i wyprzedzić <strong class="colorful">konkurencje</strong>
        </ServicesText>
        <Link to={'/kontakt'}><ServicesButton>Skontaktuj się</ServicesButton></Link>
      </ServicesRight>
    </ServicesContainer>
  </ServicesSection>

  <BlackSection>
    <BlackContainer>
      <ServicesLeft>
        <ServicesHeader className="white-text">Wciąż się zastanawiasz czy Twoja firma potrzebuje strony?</ServicesHeader>
        <ServicesText className="white-text">
          Strona internetowa pomoże uporządkować Tobie niezbędne informacje których szuka klient, przykładem mogą być oferowane usług i dane kontaktowe. Poprzez strone internetową tworzymy bardzo wydajny kanał komunikacyjny z dzięki któremu klient znajdzie na stronie wystarczające informacje, żeby podjąć decyzję czy może nam zaufać.
        </ServicesText>
      </ServicesLeft>
      <ServicesRight>
        <ImgWrap>
          <ServicesImg src={Servicesimg}/>
        </ImgWrap>
      </ServicesRight>
    </BlackContainer>
    <BlackContainer2>
      <ServicesRight2>
        <ImgWrap2>
          <ServicesImg2 src={Servicesimg2}/>
        </ImgWrap2>
      </ServicesRight2>
      <ServicesLeft className="mobile100">
        <ServicesHeader className="white-text">Co zyskujesz przy współpracy ze mną</ServicesHeader>
        <ServicesText className="white-text">
        <Check width="20" height="20"/> Nowoczesne i responsywne strony <br /> <br />
        <Check width="20" height="20"/> Strony przyjazne dla SEO <br /> <br />
        <Check width="20" height="20"/> Rozwiązania pozwalające na łatwą i często samodzielną modernizacje <br /> <br />
        <Check width="20" height="20"/> Pomoc przy administrowaniu i wdrożeniu niezbędnych rzeczy <br /> <br />
        <Check width="20" height="20"/> Darmowe konsultacje i wsparcie techniczne <br /> <br />
        <Check width="20" height="20"/> Bardzo wysoka jakość względem stosunkowo niskiej ceny
        </ServicesText>
      </ServicesLeft>
    </BlackContainer2>
  </BlackSection>

  <PriceSection>
    <PriceHeader>Cennik usług</PriceHeader>
    <PriceParagraph>Poniższe ceny mogą różnić się w zależności od projektu</PriceParagraph>
    <PriceContainer>
      <PriceColumn>
        <ColumnHeader>Prosta strona internetowa</ColumnHeader>
        <ColumnImgWrap>
          <ColumnImg src={Plan1}/>
        </ColumnImgWrap>
        <ColumnPrice>500-700zł</ColumnPrice>
        <ColumnParagraph>Strona wizytówka, składająca się z maksymalnie 2 podstron. Przewidywany czas realizacji: do 10 dni</ColumnParagraph>
        <div>
        <Link to={"/kontakt"}><ColumnButtonCommon>Kontakt</ColumnButtonCommon></Link>
        </div>
      </PriceColumn>

      <PriceColumn>
        <ColumnHeader>Kompleksowa strona internetowa</ColumnHeader>
        <ColumnImgWrap>
          <ColumnImg src={Plan2}/>
        </ColumnImgWrap>
        <ColumnPrice>800-1300zł</ColumnPrice>
        <ColumnParagraph>Wariant rozbudowanej strony internetowej, nieograniczona ilość podstron. Przewidywany czas realizacji: do 16 dni</ColumnParagraph>
        <Link to={"/kontakt"}><ColumnButtonCommon>Kontakt</ColumnButtonCommon></Link>
      </PriceColumn>

      <PriceColumn>
        <ColumnHeader>Sklep internetowy eCommerce</ColumnHeader>
        <ColumnImgWrap>
          <ColumnImg src={Plan3}/>
        </ColumnImgWrap>
        <ColumnPrice>1000-1800zł</ColumnPrice>
        <ColumnParagraph>Łatwo zarządzalny sklep internetowy na silniku WooCommerce obsługujący do 2500 produktów. Przewidywany czas realizacji: do 3 tygodni</ColumnParagraph>
        <Link to={"/kontakt"}><ColumnButtonCommon>Kontakt</ColumnButtonCommon></Link>
      </PriceColumn>
    </PriceContainer>
  </PriceSection>
  </MainTemplate>
)
}




export default OfertaPage;

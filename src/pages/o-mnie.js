import React from "react"
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import styled from 'styled-components'
import Img from "gatsby-image"

import Bg from '../assets/images/background.png'
import Aboutimg from '../assets/images/aboutjpg.jpg'
import Aboutimg2 from '../assets/images/aboutjpg2.jpg'


const AboutSection = styled.section`
  background-image: url('${Bg}');

  .AboutSecond{
    padding: 0 0 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`
const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 53px;
  color: #000;
  padding: 9rem 0 1rem 0;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`


const AboutContainer = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto 0 auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0 0 0;
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
}


`
const AboutLeft = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const AboutRight = styled.div`
  width: 50%;
  padding: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const AboutHeader = styled.h2`
font-size: 2rem;
color: #000;
line-height: 1.125;
font-weight: 700;
`
const AboutText = styled.p`
font-size: 1.1rem;
color: #000;
line-height: 1.2;
font-weight: 400;
`
const ImgWrap = styled.div`
  margin: 30px;
  padding: 30px;
  background-color: #FFFFFF;
  border-radius: 30px;
  box-shadow: 0px 0px 30px -5px rgb(0 15 35 / 15%);
  text-align: center;
`
const AboutImg = styled.img`
  vertical-align: middle;
  horizontal-align: middle;
  display: inline-block;
  width: 300px;
  height: auto;
  max-width: 100%;
  border: none;
  object-fit: cover;
  border-radius: 20px;
`
const InstaHeader = styled.div`
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 10px;
`
const InstaParagraph = styled.div`
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0px;
`
const InstaContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  display:flex;
  margin-top: 20px;
  .igImage {
    height: 350px;
    object-fit: cover;
  }
`
const InstaImage = styled.div`
  width: 14.2857143%;
`


const OmniePage = () => {
  return (
  <MainTemplate>
    <AboutSection>
      <AboutTitle>Poznaj mnie bli??ej.</AboutTitle>
    <AboutContainer>
      <AboutLeft>
        <AboutHeader>Cze????, tu Krzy??. 20-letni dynamicznie rozwijaj??cy si?? samouk, developer front-end'owy i webowy z miejscowo??ci ??apy.</AboutHeader>
        <AboutText>Od 2018r ucz?? si?? programowa??, projektowa?? i tworzy?? aplikacje oraz <strong class="colorful"> strony internetowe </strong>. Swoj?? wi??dz?? zag????bia??em poprzez czytanie ksi????ek, braniem udzia??u w kursach,  tworzeniem projekt??w i braniem udzia??u w praktykach. <br /> <br />
                   Na swoim koncie posiadam <strong class="colorful"> stworzonych </strong> oko??o <strong class="colorful"> 20 stron internetowych</strong>, w tym <strong class="colorful"> 4 sklepy online </strong>. <br /> <br />
                 Specializuj?? si?? w <strong class="colorful"> projektowaniu stron </strong>, <strong class="colorful"> tworzeniem i zarz??dzaniem stron internetowych </strong>, eCommerce'em <strong class="colorful">(sklepy internetowe) </strong> oraz wci???? poszerzam swoj?? wi??dze z zakresu <strong class="colorful"> SEO, pozycjonowania stron.</strong>
        </AboutText>
    </AboutLeft>
      <AboutRight>
        <ImgWrap>
          <AboutImg src={Aboutimg}/>
        </ImgWrap>
      </AboutRight>
    </AboutContainer>

    <AboutContainer className="AboutSecond">
      <AboutRight>
        <ImgWrap>
          <AboutImg src={Aboutimg2}/>
        </ImgWrap>
      </AboutRight>
      <AboutLeft>
        <AboutHeader>A poza stronami...</AboutHeader>
        <AboutText>Uwielbiam uczy?? si?? nowych rzeczy zwi??zanych z informatyk??, szczeg??lnie z dzia??u IoT. W prysz??o??ci chc?? pracowa?? jako <strong class="colorful"> front-end developer </strong> i tworzy?? projekty <strong class="colorful">aplikacji webowych. </strong> <br /> <br />
                   Poza informatyk?? hobbystycznie zajmuj?? si?? <strong class="colorful"> fotografi?? portretow?? </strong> oraz interesuj?? si?? sportem i astronomi??. <br /> <br />
                   Fascynuj?? si?? pr??bowaniem przer????nych nowych rzeczy i poszerzaniem swojej wiedzy.
        </AboutText>
    </AboutLeft>
    </AboutContainer>
    </AboutSection>

  </MainTemplate>
)
}




export default OmniePage

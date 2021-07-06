import React, { useState } from "react"
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby';

import Phone from '../assets/images/icons/phone.svg'
import Mail from '../assets/images/icons/mail.svg'
import Bg from '../assets/images/background.png'


const ContactSection = styled.section`
  background-image: url('${Bg}');

`
const ContactTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 53px;
  color: #000;
  padding: 12rem 0 3rem 0;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`
const ContactContainer = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto 0 auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #F7F7F7;
border-radius: 35px;
margin-bottom: 60px;
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`
const ContactLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 60px 0 200px 60px;
  margin: 10px;
  background: linear-gradient(90deg, #B31217 0%, #EF5F63 100%);
  border-radius: 30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const ContactRight = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
  }
`
const ContactP = styled.p`
  color: #fff;
  font-weight: 400;
  font-szie: 16px;
  line-height: 24px;
`
const ContactH = styled.h3`
  font-size: 30px;
  line-height: 35px;
  font-weight: 600;
  color: #fff;
`
// ICON BOX
const IconBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const IconRow = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 14px;
  margin-top: 14px;
`
const TextRow = styled.div`
  flex-grow: 1;
  text-align: left;
`
const TextH = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  margin: 10px 0;
`
const TextA = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
`
// CONTACT FORM
const FormTitle = styled.h3`
font-size: 38px;
font-weight: 700;
color: #000;
padding: 0 2rem;
`
const ContactForm = styled.form`
.required:after {
  content: "*";
  margin-left: .25rem;
  color: #ef5f63;
}
`
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`
const FormField = styled.div`
  width: 50%;
  padding: 0 2rem;
`
const TextField = styled.div`
  width: 100%;
  padding: 0 2rem;
`
const FormLabel = styled.label`
  display: block;
  width: 100%;
  font-weight: 600;
  margin-bottom: .25rem;
  position: relative;
  letter-spacing: .7px;

`
const FormInput = styled.input`
  color: #696969;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0,0,.2,1);
  display: block;
  appearance: none;
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid #c7c7c7;
  padding: 1rem;
  border-radius: .25rem;
  line-height: 1.25;
`
const FormSelect = styled.select`
  color: #696969;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0,0,.2,1);
  display: block;
  appearance: none;
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid #c7c7c7;
  padding: 1rem;
  border-radius: .25rem;
  line-height: 1.25;
`
const FormOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`
const FormMessage = styled.textarea`
  color: #696969;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0,0,.2,1);
  display: block;
  appearance: none;
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid #c7c7c7;
  padding: 1rem;
  border-radius: .25rem;
  line-height: 1.25;
`
const SubmitButton = styled.button`
display: block;
padding: 8px 24px;
background-color: transparent;;
color: #ef5f63;
text-decoration: none;
border: 2px solid #ef5f63;
font-size: 16px;
line-height: 26px;
font-weight: 600;
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const KontaktPage = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
   setState({ ...state, [e.target.name]: e.target.value })
 }

  return (
  <MainTemplate>
    <ContactSection>
  <ContactTitle>Stwórzmy coś razem!</ContactTitle>
  <ContactContainer>
    <ContactLeft>
      <ContactP>Masz pytania? <br /> Chcesz nawiązać współprace? <br /> Użyj formularza obok lub jednej z opcji poniżej</ContactP>
      <ContactH>Dane kontaktowe</ContactH>
      <IconBox>
        <IconRow> <Phone width="50" height="50"/> </IconRow>
        <TextRow>
          <TextH>Telefon:</TextH>
          <TextA href="tel:505709535">+48 505 709 535</TextA>
        </TextRow>
      </IconBox>
      <IconBox>
        <IconRow> <Mail width="50" height="50"/> </IconRow>
        <TextRow>
          <TextH>Email:</TextH>
          <TextA href="mailto:zlvsky@icloud.com">zlvsky@icloud.com</TextA>
        </TextRow>
      </IconBox>
  </ContactLeft>

    <ContactRight>
      <ContactForm
        data-netlify="true"
        name="contactForm"
        method="post"
        id="contact"
        >
        <input type="hidden" name="contactForm" value="formularz kontaktowy" />

        <FormTitle>Formularz kontaktowy</FormTitle>
        <FlexWrap>
          <FormField>
            <FormLabel htmlFor='input-name' className="required">Imię i Nazwisko</FormLabel>
            <FormInput
              name='name'
               type='text'
                id='input-name'
                onChange={handleChange}
                required aria-required="true"></FormInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor='input-telephone' >Telefon</FormLabel>
            <FormInput
              name='telephone'
               type='text'
                id='input-telephone'
                onChange={handleChange}>
                </FormInput>
          </FormField>
        </FlexWrap>

        <FlexWrap>
          <FormField>
            <FormLabel htmlFor='input-email' className="required">Adres Email</FormLabel>
            <FormInput
              name='emailAddress'
               type='email'
                id='input-email'
                required aria-required="true"
                onChange={handleChange}></FormInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor='input-subject' className="required">Temat</FormLabel>
            <FormSelect
              name='subject'
               id='input-subject'
                 required aria-required="true">
              <FormOption value="Wybierz" defaultValue >Wybierz</FormOption>
              <FormOption value="Zwykłe pytanie">Zwykłe pytanie</FormOption>
              <FormOption value="Projekt strony internetowej">Projekt strony internetowej</FormOption>
              <FormOption value="Projekt sklepu internetowego">Projekt sklepu internetowego</FormOption>
            </FormSelect>
          </FormField>
        </FlexWrap>

        <TextField>
          <FormLabel htmlFor='input-message' className="required">Wiadomość</FormLabel>
          <FormMessage
            name="message"
             id='input-message'
              rows='5'
              required aria-required="true"
              onChange={handleChange}></FormMessage>
        </TextField>

        <TextField>
          <SubmitButton type="submit">Wyślij wiadomość</SubmitButton>
        </TextField>
      </ContactForm>
    </ContactRight>
  </ContactContainer>
  </ContactSection>
  </MainTemplate>
)
}




export default KontaktPage

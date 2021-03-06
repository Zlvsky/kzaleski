import React, { useState } from "react"
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import styled from 'styled-components'

import Phone from '../assets/images/icons/phone.svg'
import Mail from '../assets/images/icons/mail.svg'
import Bg from '../assets/images/background.png'


const ContactSection = styled.section`
  background-image: url('${Bg}');
  .required:after {
    content: "*";
    margin-left: .25rem;
    color: #ef5f63;
  }
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
const KontaktPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    emailAddress: "",
    telephone: "",
    subject: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
  <MainTemplate>
    <ContactSection>
  <ContactTitle>Stw??rzmy co?? razem!</ContactTitle>
  <ContactContainer>
    <ContactLeft>
      <ContactP>Masz pytania? <br /> Chcesz nawi??za?? wsp????prace? <br /> U??yj formularza obok lub jednej z opcji poni??ej</ContactP>
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
      <form
         name="contactForm"
         method="post"
         action="/thanks"
         data-netlify="true"
         data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <FormTitle>Formularz kontaktowy</FormTitle>
        <FlexWrap>
          <FormField>
            <FormLabel htmlFor='input-name' className="required">Imi?? i Nazwisko</FormLabel>
            <FormInput
              name='name'
               type='text'
                id='input-name'
                 value={formState.name}
                 onChange={handleChange}
                  required aria-required="true"></FormInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor='input-telephone' >Telefon</FormLabel>
            <FormInput
              name='telephone'
               type='text'
                id='input-telephone'
                 value={formState.phone}
                 onChange={handleChange}></FormInput>
          </FormField>
        </FlexWrap>

        <FlexWrap>
          <FormField>
            <FormLabel htmlFor='input-email' className="required">Adres Email</FormLabel>
            <FormInput
              name='emailAddress'
               type='email'
                id='input-email'
                 value={formState.email}
                 onChange={handleChange}
                  required aria-required="true"></FormInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor='input-subject' className="required">Temat</FormLabel>
            <FormSelect
              name='subject'
               id='input-subject'
                value={formState.subject}
                onChange={handleChange}
                 required aria-required="true">
              <FormOption value="Wybierz" defaultValue >Wybierz</FormOption>
              <FormOption value="Zwyk??e pytanie">Zwyk??e pytanie</FormOption>
              <FormOption value="Projekt strony internetowej">Projekt strony internetowej</FormOption>
              <FormOption value="Projekt sklepu internetowego">Projekt sklepu internetowego</FormOption>
            </FormSelect>
          </FormField>
        </FlexWrap>

        <TextField>
          <FormLabel htmlFor='input-message' className="required">Wiadomo????</FormLabel>
          <FormMessage
            name="message"
             id='input-message'
              rows='5'
               value={formState.message}
               onChange={handleChange}
                required aria-required="true"></FormMessage>
        </TextField>

        <TextField>
          <SubmitButton type="submit">Wy??lij wiadomo????</SubmitButton>
        </TextField>
      </form>
    </ContactRight>
  </ContactContainer>
  </ContactSection>
  </MainTemplate>
)
}




export default KontaktPage

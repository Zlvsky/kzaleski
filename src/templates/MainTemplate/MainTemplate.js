import React from "react"
import Nav from "../../components/nav"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import styled from 'styled-components'

const MainWrap = styled.div`
position: relative;
`

const MainTemplate = ({ children }) => (
  <>
    <Seo />
    <Nav />
    <MainWrap>
    {children}
    </MainWrap>
    <Footer />
  </>
)

export default MainTemplate

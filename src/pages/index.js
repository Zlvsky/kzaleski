import React from "react"
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import Hero from '../templates/Hero/Hero'
import WhatIDo from '../templates/WhatIDo/WhatIDo'
import Projects from '../templates/Projects/Projects'
import HowIWork from '../templates/HowIWork/HowIWork'
import Collab from '../templates/Collab/Collab'
import '../assets/styles/global.css'

const IndexPage = () => (
  <MainTemplate>
    <Hero />
    <WhatIDo />
    <Projects />
    <HowIWork />
    <Collab />
  </MainTemplate>
)





export default IndexPage

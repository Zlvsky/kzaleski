import React, { useState } from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"

import { useStaticQuery, graphql} from 'gatsby'
import { Link } from "gatsby"
const ProjectWrap = styled.div`
 position: relative;
 display: block;
 width: 100%;
 background-color: white;
 padding-top: 150px;
`
const ProjectHeader = styled.h1`
  color: #2e2e2e;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 3.5rem;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`
const ProjectParagraph = styled.p`
  color: #2e2e2e;
  text-align: center;
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.5rem;
  margin-top: 0px;
`
const ProjectsList = styled.div`
  margin: 0 auto 0;
  display: block;
  position: relative;
  width: 98%;
  min-height: 520px;
  max-width:850px;
  overflow: hidden;
  &:after {
  content: "";
  position: absolute;
  z-index: 99;
  transition: opacity .25s ease-out;
  width: 100%;
  left: 0;
  bottom: 0;
  border-bottom: 10px solid rgba(0,0,0,.05);
  }
  .itemUl{
    display:block;
    width: 100%;
    list-style: none;
    padding: 0;
    position: relative;
    max-width:700px;
    margin: 0 auto 0;
  }
  .itemUl.hasSelect .listActive {
    transform: translateY(0) !important;
    transform: scale(1.1) !important;
    &:hover {
      margin-top: 0;
    }
  }
  .itemUl.hasSelect .listNotActive-bottom {
    transform: translateY(550px) !important;
  }
  .itemUl.hasSelect .listNotActive-upper {
    transform: translateY(-550px) !important;
  }
  .itemUl.hasSelect .listActive .itemDesc {
    opacity: 1;
  }
  .itemLi {
    display: inline-block;
    width: 100%;
    position: absolute;
    transition: transform 0.6s, margin 0.2s ;
    cursor: pointer;
    box-sizing: border-box;
    height: 500px;
    @media (max-width: 600px) {
      height:52px;
    }
    &:hover {
      margin-top: -29px;
      @media (max-width: 600px) {
        transform: translateY(-5px);
        transform-origin: center top;
      }
    }
    &:hover .itemDesc {
      opacity: 1;
    }
    &:hover .Gitpng {
      opacity: 1;
    }
    .listActive {

    }
    .listNotActive {

    }
  }
  .itemContainer {
   margin: 0;
   width: 100%;
   position: absolute;
   display: inline-block;
  }
  .itemImg{

     border-radius: 8px;
     box-shadow: 0 0 16px rgba(0,0,0,.1);
     background-size: cover;
     background-position: 50%;
  }
  .itemDesc {
    position: absolute;
     top: 0;
     margin-left: 10px;
     padding: 8px 16px;
     border-radius: 80px;
     background-color: #181818;
     text-align: center;
     color: white;
     font-size: 28px;
     font-weight: 500;
     opacity: 0;
     @media (max-width: 600px) {
       margin: 5px 0 0 10px;
     }
  }
  .Gitpng {
    position: absolute;
    top:0;
    right: 7%;
    display: flex;
    width: 45px;
    height: 45px;
    opacity: 0;
    margin-top: 30px;
    @media (max-width: 600px) {
      margin: 5px 0 0 10px;
    }

  }
`


const Items = ( { data } ) => (
  <ul className="itemUl">
      {data.allImagesJson.nodes.map((imageLi, index) => (
        <li className="itemLi"
          key={index}
          style={{zIndex: 10 + index, transform: `translate3d(${0}px, ${64 * index}px, ${-90 + index * 10}px)`}}
          >
          <div className="itemContainer">
            <Img fluid={imageLi.src.childImageSharp.fluid} className="itemImg" alt="Realizacje aplikacji webowych"/>
            <Link to={`${imageLi.live}`}><p className="itemDesc">{imageLi.name}</p></Link>
          </div>
        </li>
      ))}
  </ul>

)



const Screens = ( { data } ) =>  {
  const [isActive, setIsActive] = useState(0);
  const [hasSelect, setHasSelect] = useState(false);
  return (
  <ul className={`itemUl ${hasSelect ? 'hasSelect' : ''}`}>
      {data.allBigscreensJson.nodes.map((bigLi, index) => (
        <li className={`itemLi ${(isActive === index && hasSelect) ? 'listActive' : (isActive > index ? 'listNotActive-upper' : 'listNotActive-bottom') }`}
          key={index}
          style={{zIndex: 10 + index, transform: `translate3d(${0}px, ${64 * index}px, ${-90 + index * 10}px)`}}
          onClick={() => {
            setIsActive(index)
            setHasSelect(prevSelect => !prevSelect)
          }}
          >
          <div className="itemContainer">
            <Img fluid={bigLi.src.childImageSharp.fluid} className="itemImg" alt="Realizacja strony internetowej"/>
            <Link to={`${bigLi.live}`}><p className="itemDesc">{bigLi.name}</p></Link>
          </div>
        </li>
      ))}
  </ul>
)
}



const Projects = () => {


  const data = useStaticQuery(graphql`
    query {
      allImagesJson {
        nodes {
          name
          live
          git
          src {
            childImageSharp {
              fluid(quality: 100, maxWidth: 780) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allBigscreensJson {
        nodes {
          name
          live
          src {
            childImageSharp {
              fluid(quality: 100, maxWidth: 780) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
  <ProjectWrap
    id="projects">
    <ProjectHeader>Strony Internetowe</ProjectHeader>
    <ProjectParagraph>Strony internetowe które zrealizowałem</ProjectParagraph>
    <ProjectsList>
      <Screens data={data}/>
    </ProjectsList>
    <ProjectHeader>Projekty</ProjectHeader>
    <ProjectParagraph>Moje realizacje aplikacji i projektów opartych na javascriptcie</ProjectParagraph>
    <ProjectsList>
      <Items value="Sunsetcatch School-Clicker Snake Photographer Discord-bot Inli" data={data}/>
    </ProjectsList>
  </ProjectWrap>
)}

export default Projects;

// https://young-telling-check.glitch.me << STRONA DO SUNSETCATCH LIVE

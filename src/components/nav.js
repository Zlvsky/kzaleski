import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Logo from '../assets/images/logo.png'

const MyNav = styled.div`
  position: fixed;
  background-color: white;
  display: block;
  width: 100%;
  height: 70px;
  margin: 0 auto 0 auto;
  z-index: 1000;
  top:0;
  font-weight: 500;
  #navigation {
    display: flex;
    width:100%;
    height: 100%;
    max-width: 1200px;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin: 0 auto 0 auto;
    padding: 0 15px;
    top:0;
    color: white;
  }
  #links {
    width: 70%;
    right: 0;
    display: block;
    text-align: right;
    @media (max-width: 850px) {
      display: none;
    }
  }
  #logo {

  }
  #links ul {
    list-style-type: none;
    display: inline-flex;
    position: relative;
    margin: 0;
  }
  .list-item {
    margin-left: 42px;
  }
  .nav-link {
    display: block;
    color: #212121 !important;
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: uppercase;
    height: 46px;
    width: 100%;
    line-height: 46px;
    text-align: center;
    white-space: nowrap;
  }
  .nav-link:after{
    content: "";
    height:1px;
    display: block;
    background-color: hsla(0,0%,5.7%,.8);
    transform-origin: 0% 50%;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
    -webkit-transform-origin: 100% 50%;
  }
  .nav-link:hover:after {
    transform: scaleX(1);
    -webkit-transform: scaleX(1);
    transform-origin: 0 50%;
    -webkit-transform-origin: 0% 50%;
  }

  .btn {
  display: block;
  padding: 0 24px;
  background-color: transparent;;
  color: #ef5f63;
  text-decoration: none;
  border: 2px solid #ef5f63;
  letter-spacing: 2px;
  white-space: nowrap;
  font-size: 14px;
  line-height: 46px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  transition-property: all;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
  &:hover {
    background-color: #ef5f63;
    color: #fff;
  }
`
const HeadNav = styled.div`
position: relative;
height: 100%;
width: 100%;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px -2px;
`
const Logoimg = styled.img `
height: 50px;
`
// mobile menu
const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  .menu-link {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-top: 15px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0D0C1D;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to={"/"} className="menu-link">Home</Link>
      <Link to={"/oferta"} className="menu-link">oferta</Link>
      <Link to={"/o-mnie"} className="menu-link">o mnie</Link>
      <Link to={"/kontakt"} className="menu-link">kontakt</Link>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <MyNav role="navigation">
      <HeadNav>
        <div id="navigation">
          <div id="logo">
            <Link to={'/'}> <Logoimg src={Logo} alt="KZaleski"/> </Link>
          </div>
          <div id="links">
              <ul>
                <li className="list-item"><Link to={"/oferta"} className="nav-link">oferta</Link></li>
                <li className="list-item"><Link to={"/o-mnie"} className="nav-link">o mnie</Link></li>
                <li className="list-item"><Link to={"/kontakt"} className="btn">kontakt</Link></li>
              </ul>
          </div>
          <MobileMenu ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MobileMenu>
        </div>
      </HeadNav>
    </MyNav>
  )
}
export default Nav

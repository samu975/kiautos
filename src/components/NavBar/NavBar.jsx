import styled from 'styled-components'
import { Logo } from './Logo';
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react';
import { blanco, negro, rojoClaro } from '../../assets/colors/Colors';




export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-right: 12px;
  position: fixed;
  top: 80px;
  z-index: 2;
  background-color: ${blanco};
  @media screen and (min-width: 700px) {
      top: 32px;
    }
`
export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1388px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  
`
export const NavElementContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 70px;
    left: ${ ({isClicked}) => isClicked ? 0 : '-100%' };
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: ${negro};
    padding-right: 1rem;
    z-index: 5;
  }
`
export const NavElement = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: ${negro};
  font-weight: 400;
  &:hover{
    border-bottom: 0.3rem solid ${rojoClaro};
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    color: ${blanco};
    
  }

  
`
export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: ${negro};
    font-size: 2rem;
    
  }

`

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  
  @media screen and (min-width: 320px) and (max-width: 490px) {
    padding-left: 1rem;
    width: 90%;
    h1{
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 491px) and (max-width: 719px) {
    width: 60%;
  }
  @media screen and (min-width: 720) and (max-width: 960px) {
    width: 50%;
  }
`
export const Hamburguer = styled(FaBars)`
  padding-right: 1rem;
`

export const NavBar = () => {
  
  const [click, setClick] = useState(false)
  const changeClick = () =>{
    setClick(!click)
  }

  return (
    <>
      <NavBarContainer className='navBarContainer'>
        <NavBarWrapper>
          <IconLogo><Logo /></IconLogo>
          <MenuMobile onClick={ ()=>{ changeClick() } } >
            { click ? <FaTimes /> : <FaBars /> } 
          </MenuMobile>
          <NavElementContainer isClicked={click} onClick={()=>{ changeClick() }}>
            <NavElement smooth  to="/#top" name="Inicio">Home</NavElement>
            <NavElement smooth to="/#nosotros" name="Nosotros">Nosotros</NavElement>
            <NavElement smooth to='/#servicios' name="Servicios">Servicios</NavElement>
            <NavElement smooth to='/#contacto' name="Contacto">Contacto</NavElement>
          </NavElementContainer>
        </NavBarWrapper>
      </NavBarContainer>
    </>
    
  );
};


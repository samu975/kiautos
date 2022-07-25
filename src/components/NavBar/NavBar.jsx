import styled from 'styled-components'
import { MenuMobile, NavBarElement } from './NavBarElement';
import { Logo } from './Logo';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';


export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 2;
`
export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1388px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
    background-color: rgba(235, 200, 139, 0.8) ;
    padding-right: 1rem;
  }
`
export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  color: #ebc88b;

  @media screen and (max-width: 960px) {
    padding-left: 1rem;
    h1{
      font-size: 0.9rem;
    }
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
      <NavBarContainer>
        <NavBarWrapper>
          <IconLogo><Logo /><h1>Kiautos del sur</h1></IconLogo>
          <MenuMobile onClick={ ()=>{ changeClick() } } >
            { click ? <FaTimes /> : <FaBars /> } 
          </MenuMobile>
          <NavElementContainer isClicked={click} onClick={()=>{ changeClick() }}>
            <NavBarElement  url="/" name="Inicio"></NavBarElement>
            <NavBarElement url="/about" name="Nosotros"></NavBarElement>
            <NavBarElement url='/services' name="Servicios"></NavBarElement>
            <NavBarElement url='/contact' name="Contacto"></NavBarElement>
          </NavElementContainer>
        </NavBarWrapper>
      </NavBarContainer>
    </>
    
  );
};


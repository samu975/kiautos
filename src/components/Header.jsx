import React from 'react'
import { FaRegClock } from "react-icons/fa";
import styled from 'styled-components';
import { rojoOscuro } from '../assets/colors/Colors';


export const HeaderContainer = styled.div`
    background-color: ${rojoOscuro};
    padding: 5px 5px;
    position: fixed;
    width: 100%;
    height: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    h2{
        margin-left: 7px;
        font-size: 0.9rem;
    }
    @media screen and (min-width: 700px) {
      br{
        display: none;
      }
    }
`

export const Header = ({initTime, finishTime}) => {
  return (
    <>
        <HeaderContainer>
          <FaRegClock />
          <div>
            <h2>Horario de Atenció:  <br /> lunes a viernes de: {initTime}-{finishTime}.<br />    Sabados de: 8 AM - 2PM</h2>
          </div>
          </HeaderContainer>
    </>
  )
}

import React from 'react'
import { FaRegClock } from "react-icons/fa";
import styled from 'styled-components';
import { rojoOscuro } from '../assets/colors/Colors';

export const HeaderContainer = styled.div`
    background-color: ${rojoOscuro};
    padding: 5px 5px;
    position: fixed;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    h2{
        margin-left: 7px;
        font-size: 0.9rem;
    }
`

export const Header = ({initTime, finishTime}) => {
  return (
    <>
        <HeaderContainer><FaRegClock /><h2>Horario de Atención de: {initTime}-{finishTime}</h2></HeaderContainer>
    </>
  )
}

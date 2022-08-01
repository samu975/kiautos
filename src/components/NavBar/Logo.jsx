import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/Logo-sin-fondos.png'

const LogoStyled = styled.img`
  right: 0;
  width: 60%;
  @media screen and (min-width:960px) {
    width: 24%;
  }
`

export const Logo = () => { 
  return (
    <LogoStyled src={logo}></LogoStyled>
  )
}

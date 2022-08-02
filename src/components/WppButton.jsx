import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import styled from 'styled-components'

const WppContainer = styled.a`
    position: fixed;
    width: 55px;
    height: 55px;
    line-height: 55px;
    bottom: 5px;
    right: 5px;
    background-color: #0df053;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 0 1px 10px rgba(0,0,0,0.3);
    z-index: 1;
    @media screen and (min-width: 960px){
        bottom: 30px;
        right: 30px;
        &:hover{
            text-decoration: none;
            color: #0df053;
            background-color: #fff;
        }
    }
`

const WppIcon = styled(FaWhatsapp)`
    
`


const WppButton = () => {
  return (
    <>
        <WppContainer href='https://wa.me/message/X5C6UE5XOAC4O1?src=qr' target='_blank'>
            <WppIcon />
        </WppContainer>
    </>
    
  )
}

export default WppButton
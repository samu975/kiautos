import React from 'react'
import styled from 'styled-components'
import { blanco, rojoOscuro } from '../assets/colors/Colors'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 960px) {
        align-items: flex-end;
    }
`

const RightDiv = styled.div`
    width: 100%;
    margin: 0;
    bottom: 0px;
    padding: 5%;
    background-color: ${rojoOscuro};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 960px) {
        padding: 2%;
    }
    
`
const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`
const IconLink = styled.a`
    margin-top: 25px;
    margin-bottom: 0;
    height: 40px;
    width: 80px;
    font-size: 30px;
    text-decoration: none;
    color: ${blanco};
    @media screen and (min-width: 960px) {
        font-size: 50px;
    }
`



const Footer = () => {
  return (
    <>
        <FooterContainer>
            <RightDiv>
                <h3>Encuentranos en nuestras redes sociales: </h3>
                <IconsContainer>
                    <IconLink href='https://www.instagram.com/kiautosdelsur/?utm_source=qr' target='_blank'><BsFacebook /></IconLink>
                    <IconLink href='https://www.instagram.com/kiautosdelsur/?utm_source=qr' target='_blank'><BsInstagram /></IconLink>
                </IconsContainer>
            </RightDiv>
        </FooterContainer>
    </>
  )
}

export default Footer
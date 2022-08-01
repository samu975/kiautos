import React from 'react'
import styled from 'styled-components'
import { blanco, rojoOscuro } from '../assets/colors/Colors'
import IconElement from '../assets/Icons/IconElement'
import { Mapa } from './Home/Mapa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const FooterContainer = styled.section`
    width: 100%;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 960px) {
        align-items: flex-end;
    }
`

const LeftDiv = styled.div`
    width: 100%;
    padding: 5%;
    background-color: ${blanco};
    color: ${rojoOscuro};
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
    @media screen and (min-width: 960px) {
        font-size: 50px;
    }
`



const Footer = () => {
  return (
    <>
        <FooterContainer>
            <LeftDiv>
                <h3>Donde estamos: </h3>
                <p style={{marginTop: '10px', marginBottom: '10px'}}>Cl. 38 Sur #37-28, Envigado, Antioquia</p>
                <Mapa />
            </LeftDiv>
            <RightDiv>
                <h3>Encuentranos en nuestras redes sociales: </h3>
                <IconsContainer>
                    <IconLink><BsFacebook /></IconLink>
                    <IconLink><BsInstagram /></IconLink>
                </IconsContainer>
            </RightDiv>
        </FooterContainer>
    </>
  )
}

export default Footer
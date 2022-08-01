import React from 'react'
import styled from 'styled-components'
import { FaTools } from 'react-icons/fa'
import { blanco, gris, negro, rojoClaro, rojoOscuro } from '../../assets/colors/Colors'

const SectionContainer = styled.section`
    margin-top: -124px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5%;
    @media screen and (min-width: 1020px) {
        margin: 20px 0;
        padding: 20px 180px;
    }
`
const TarjetaContainer = styled.section`
    @media screen and (min-width: 1020px){
        border: 1px solid ${gris};
        border-radius: 15px;
        margin: 30px;
        padding: 20px;
        box-shadow: 5px 5px 5px black;
        background-color: white;
    }

`
const TopContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
const Titulo = styled.h1`
    width: 70%;
    font-size: 20px;
    padding-left: 0;
    color: ${rojoOscuro};
    text-transform: uppercase;
    @media screen and (min-width: 1020px) {
        
    }
`
const Texto = styled.p`
    padding: 0 20px;
    margin-top: 20px;
    color: ${gris};
    @media screen and (min-width: 1020px) {
        
    }
`
const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${rojoOscuro};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`
const Icon = styled(FaTools)`
    color: ${blanco};
    font-size: 22px;
    width: 60%;
    padding-right: 1;
`


const InfoPrincipal = () => {
  return (
    <>  <SectionContainer>
            <TarjetaContainer>
            <TopContainer>
                <IconContainer>
                    <Icon />
                </IconContainer>
               
                <Titulo>Distrubuidores de repuestos y lavado de autos </Titulo>
            </TopContainer>
            <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit, neque et semper scelerisque, arcu dui tempor tellus, ut aliquam arcu ante ut magna. Quisque tempus justo nec nisi ultrices tristique quis vitae orci. Suspendisse vel posuere sapien. Aenean ac purus et dolor accumsan commodo non sed tortor. Nullam at ullamcorper eros. Fusce vehicula magna quis risus ornare, vel hendrerit leo molestie. Aenean odio massa, iaculis nec varius at, varius quis ligula. In in laoreet justo. Pellentesque erat eros, imperdiet non leo nec, tempus dictum orci. Donec in lobortis purus. Donec vestibulum fermentum faucibus.
            </Texto>
            </TarjetaContainer>
        </SectionContainer>
    </>
  )
}

export default InfoPrincipal
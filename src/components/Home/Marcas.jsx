import React from 'react'
import styled from 'styled-components'
import { rojoClaro, rojoOscuro } from '../../assets/colors/Colors'
import MarcaElement from './MarcaElement'
import logoKia from '../../assets/marcas/logokia.png'
import logoHyundai from '../../assets/marcas/hyundai.png'
import logoChevrolet from '../../assets/marcas/chevrolet.png'
import { JackInTheBox } from "react-awesome-reveal";

const MarcasContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
`
const MarcasTitulo = styled.h2 `
    color: ${rojoOscuro};
    text-transform: uppercase;
    font-size: 22px;
    
`
const ElementsContainer = styled.div `
  margin-top: 15px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  
  @media screen and (min-width: 960px){
    margin-top: 40px;
    padding-bottom: 60px;
  }
`






const Marcas = () => {
  return (
    <>
    

      <MarcasContainer >
        <MarcasTitulo>Marcas que atendemos</MarcasTitulo>
        <ElementsContainer>
        <JackInTheBox delay={100}>
            <MarcaElement urlImg={logoHyundai}/>
        </JackInTheBox>
        <JackInTheBox delay={100}>
            <MarcaElement urlImg={logoChevrolet}/>
        </JackInTheBox>
        <JackInTheBox delay={100}>
            <MarcaElement urlImg={logoKia}/>
        </JackInTheBox>
        </ElementsContainer>
      </MarcasContainer>  
    </>
  )
}

export default Marcas
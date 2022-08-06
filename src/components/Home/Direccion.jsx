import React from 'react'
import styled from 'styled-components'
import { blanco, negro, rojoOscuro } from '../../assets/colors/Colors'
import { Mapa } from './Mapa'


const LeftDiv = styled.div`
    width: 100%;
    padding: 2% 5% 2% 5%;
    color: ${rojoOscuro};
    margin-top: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const DireccionesTitle = styled.h3`
  color: ${rojoOscuro};
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  margin-top: 0;
`
const DireccionesParrafo = styled.p`
  color: ${rojoOscuro};
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: 18px;
`

const Direccion = () => {
  return (
    <LeftDiv>
        <DireccionesTitle>Donde estamos </DireccionesTitle>
        <DireccionesParrafo>Cl. 38 Sur #37-28, Envigado, Antioquia</DireccionesParrafo>
        <Mapa />
    </LeftDiv>
  )
}

export default Direccion
import React from 'react'
import styled from 'styled-components'
import { blanco, rojoOscuro } from '../../assets/colors/Colors'
import { Mapa } from './Mapa'


const LeftDiv = styled.div`
    width: 100%;
    padding: 5%;
    background-color: ${blanco};
    color: ${rojoOscuro};
    margin-top: 15px;
`

const Direccion = () => {
  return (
    <LeftDiv>
        <h3>Donde estamos: </h3>
        <p style={{marginTop: '10px', marginBottom: '10px'}}>Cl. 38 Sur #37-28, Envigado, Antioquia</p>
        <Mapa />
    </LeftDiv>
  )
}

export default Direccion
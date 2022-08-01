import React from 'react'
import styled from 'styled-components'

const MapaContainer = styled.iframe `
  width: 100%;
  @media screen and (max-width: 350px) {
        width: fit-content;
    }
`


export const Mapa = () => {
  return (
    <div><MapaContainer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.723097359635!2d-75.5844109!3d6.1678225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683dcb5942b55%3A0x8ae2880c2b42d561!2sAlmacen%20De%20Repuestos%20-%20KIAUTOSDELSUR!5e0!3m2!1ses!2sco!4v1659386502952!5m2!1ses!2sco" width="600" height="450"></MapaContainer></div>
  )
}


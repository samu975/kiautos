import React from 'react'
import { Banner } from '../components/Home/Banner'
import Direccion from '../components/Home/Direccion'
import InfoPrincipal from '../components/Home/InfoPrincipal'
import Marcas from '../components/Home/Marcas'

export const HomePage = () => {
  return (
    <>
      <Banner />
      <InfoPrincipal />
      <Marcas />
      <Direccion />
    </>
  )
}

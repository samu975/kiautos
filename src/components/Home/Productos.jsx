import React from 'react'
import styled from 'styled-components'
import { blanco, gris, negro, rojoClaro, rojoOscuro } from '../../assets/colors/Colors'
import ProductItem from '../ProductItem'

import aceite from '../../assets/products/aceite.jpeg'
import aditivos from '../../assets/products/aditivos.jpeg'
import cleaners from '../../assets/products/cleaners.jpeg'
import clutch from '../../assets/products/clutch.jpeg'
import frenos from '../../assets/products/frenos.jpeg'
import gap from '../../assets/products/gap.jpeg'
import gti from '../../assets/products/gti.jpeg'
import llantas from '../../assets/products/llantas.jpeg'
import rotula from '../../assets/products/rotula.jpeg'
import shell from '../../assets/products/shell.jpeg'
import spray from '../../assets/products/spray.jpeg'
import spray1 from '../../assets/products/spray1.jpeg'
import { Link } from 'react-router-dom'


const ProductSection = styled.section`
    margin-top: 25px;
    background-color: ${blanco};
    width: 100%;
    height: auto;
    padding: 20px 5px;
`
const ProductSectionTitle = styled.h2`
    position: relative;
    margin-top: 15px;
    color: ${rojoOscuro};
    text-align: center;
    font-size: 22px;
    margin-bottom: 35px;
`
const ProductsGridLayout = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns:repeat(auto-fit, 150px);
  gap: 15px;
  grid-auto-rows: 150px;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, 300px);
    grid-auto-rows: 300px;
  }
  
`
const ProductCtaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
` 

const ProductCta = styled.h3`
  margin: 30px 0;
  padding: 0 10px;
  text-align: center;
  font-size: 20px;
  color: ${gris};
  @media screen and (min-width: 816px){
    margin-top: 50px;
  }
`
const BtnCta = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid ${rojoOscuro};
  background-color: ${rojoOscuro};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    color: white;
    text-decoration: none;
    background-color: ${rojoOscuro};
    border: 1px solid ${rojoOscuro};
    border-radius: 30px;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        background-color: ${rojoClaro};
        border: 1px solid ${rojoClaro};
    }
  }
`




const Productos = () => {
  return (
    <>
        <ProductSection id='servicios'>
            <ProductSectionTitle>Nuestros productos</ProductSectionTitle>
            <ProductsGridLayout>
              <ProductItem urlImg={aceite} />
              <ProductItem urlImg={aditivos} />
              <ProductItem urlImg={cleaners} />
              <ProductItem urlImg={clutch} />
              <ProductItem urlImg={frenos} />
              <ProductItem urlImg={gap} />
              <ProductItem urlImg={gti} />
              <ProductItem urlImg={llantas} />
              <ProductItem urlImg={rotula} />
              <ProductItem urlImg={shell} />
              <ProductItem urlImg={spray} />
              <ProductItem urlImg={spray1} />
            </ProductsGridLayout>
            <ProductCtaDiv>
              <ProductCta>
                Si quieres conocer más, visita nuestro instragram
              </ProductCta>
              <BtnCta>
                <a href='https://instagram.com/kiautosdelsur?r=nametag' target='_blank'>Haz click aqui</a>
              </BtnCta>
            </ProductCtaDiv>
        </ProductSection>
    </>
  )
}

export default Productos
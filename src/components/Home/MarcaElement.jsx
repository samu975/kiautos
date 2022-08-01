import React from 'react'
import styled from 'styled-components'

const ElementContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LogoMarca = styled.img`
  width: 90px;
  height: 70px;
  @media screen and (min-width: 960px) {
    width: 150px;
    height: 120px;
    
  }
`



const MarcaElement = ({urlImg, }) => {
  return (
    <>
        <ElementContainer>
            <LogoMarca src={urlImg}/>
        </ElementContainer>
    </>
  )
}

export default MarcaElement
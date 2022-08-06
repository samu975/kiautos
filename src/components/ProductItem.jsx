import React from 'react'
import styled from 'styled-components'

const Containerimg = styled.div`
    justify-self: center;
    width: 150px;
    height: 150px;
    img{
        object-fit: cover;
        width: 150px;
        height: 150px;
    }
    @media screen and (min-width: 1024px) {
        width: 300px;
        height: 300px;
        img{
            width: 300px;
            height: 300px;
        }
    }
    
`


const ProductItem = ({urlImg}) => {
  return (
    <Containerimg>
        <img src={urlImg}>

        </img>
    </Containerimg>
  )
}

export default ProductItem
import styled from "styled-components"
import Typewriter from 'typewriter-effect';
import { blanco, gris, negro, rojoClaro, rojoOscuro, rosado } from "../../assets/colors/Colors";
import video from "../../assets/video/video-banner.mp4"

export const VideoBannerContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: grid;
    overflow: hidden;
    grid-template-rows:repeat(9, 1fr);
`
export const Video = styled.video `
    position: absolute;
    height: 80vh;
    overflow: hidden;
    z-index: -1; 
    @media screen and (min-width: 960px) {
        width: 100%;
        height: auto;
        
    }
`

const TypewriterContainer = styled.div`
    grid-row: 4/7;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    .Typewriter{
        font-family: 'Bebas Neue';
        padding-top: 40px;
        height: 100px;
        background-color: rgba(0,0,0,0.9);
        span{
            width: 100%;
            text-transform:uppercase; 
            font-size: 40px;
            font-weight: 800;
            color: ${blanco};
        }
        
    }
    @media screen and (min-width: 960px) {
    justify-content: center;
    .Typewriter{
        span{
            font-size: 80px;
        }
    }
    
  }
    
`

const ButtonDiv = styled.div `
    width: 100%;
    grid-row: 7/7;
    display: flex;
    justify-content: center;
    
`
const CotizarButton = styled.a`
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
`


export const Banner = () => {
  return (
    <>
        <VideoBannerContainer>
            <Video 
                src={video}
                autoPlay
                loop
                muted
            />
            <TypewriterContainer >
            <Typewriter
            options={{
                strings: ['Buena calidad', 'Buen precio'],
                autoStart: true,
                loop: true,
            }}
        />
            </TypewriterContainer>
            <ButtonDiv>
                <CotizarButton href='https://wa.me/message/X5C6UE5XOAC4O1?src=qr' target='_blank'>Cotizar Ahora</CotizarButton>
            </ButtonDiv>
        </VideoBannerContainer>
    </>
  )
}

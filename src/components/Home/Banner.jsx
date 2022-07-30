import styled from "styled-components"
import Typewriter from 'typewriter-effect';
import { gris, negro, rojoClaro, rojoOscuro, rosado } from "../../assets/colors/Colors";
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
        @import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');
        font-family: 'Uchen', serif;
        span{
            width: 100%;
            font-size: 40px;
            font-weight: 800;
            color: ${rojoOscuro};
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
            
        </VideoBannerContainer>
    </>
  )
}

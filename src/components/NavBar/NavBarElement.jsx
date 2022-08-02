import { NavLink } from 'react-router-dom'
import  styled  from 'styled-components'
import { blanco, negro, rojoClaro, rojoOscuro } from '../../assets/colors/Colors'


  



export const NavElement = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: ${negro};
  font-weight: 400;
  &:hover{
    border-bottom: 0.3rem solid ${rojoClaro};
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    color: ${blanco};
  }

  
`
export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: ${negro};
    font-size: 2rem;
    
  }

`


export const NavBarElement = (props) => {
  return (
      <NavElement to={props.url}>{props.name}</NavElement>   
  )
}

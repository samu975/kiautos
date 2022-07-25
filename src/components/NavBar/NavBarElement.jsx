import { NavLink } from 'react-router-dom'
import  styled  from 'styled-components'


  



export const NavElement = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: white;
  font-weight: 400;
  &:hover{
    border-bottom: 0.3rem solid #ebc88b;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    
  }

  
`
export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: #ebc88b;
    font-size: 2rem;
    
  }

`


export const NavBarElement = (props) => {
  return (
      <NavElement to={props.url}>{props.name}</NavElement>   
  )
}


import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar({username}) {
  return (
      <NavbarStyled>
        <div className="left-ride">Left</div>
        <div className="right-side">
        right
        <h1>Bonjour {username}</h1> 
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
        </div>  
      </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display:flex;
    justify-content: space-between;
    /* align-items: center; */
    
    .left-side{
      background: red;
    }
    .right-side{
      background: purple;
    }
`
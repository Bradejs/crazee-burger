import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function NavbarRightSide({username}) {
  return  <NavbarRightSidetyled className="right-side">
  right
  <h1>Bonjour {username}</h1> 
  <Link to="/">
    <button>Déconnexion</button>
  </Link>
  </NavbarRightSidetyled> 
}

const NavbarRightSidetyled = styled.div`
      background: purple;

`
      


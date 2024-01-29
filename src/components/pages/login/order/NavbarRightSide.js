import { Link } from "react-router-dom";
import styled from 'styled-components';
import Profile from "./Profile";

export default function NavbarRightSide({username}) {
  return (
  <NavbarRightSidetyled className="right-side">
    {/* <div className="admin-button">Admin button</div> */}
    <Profile />
  </NavbarRightSidetyled> 
  )
}

const NavbarRightSidetyled = styled.div`
    
      display: flex;
      align-items: center;
      padding-right: 50px;

      /* .admin-button {
        background: lightblue;
      } */

      .profile {
        background: yellow;
      }


`
      


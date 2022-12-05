import styled from "styled-components";

export const NavTopBar = styled.div`
  background-color: #281354;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  .bar {
    margin-left: 20px;
    background-color: transparent;
  }
  img {
    margin-left: 20px;
    height: 35px;
    width: 55px;
    background-color: transparent;
  }
  .menu-bar {
    font-size: 20px;
    background: none;
    color: white;
  }
`;

export const NavSideBar = styled.div`
  .Closebar {
    background-color: transparent;
  }
  .nav-menu {
    background-color: #281354;
    width: 140px;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    text-decoration: none;
  }
ul{
    background-color: #281354;
    list-style-type: none;
}
  .nav-menu.active {
    left: 0;
    transition: 350ms;
    background-color: #281354;
  }

  .nav-menu a {
    background-color: #281354;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 20px 35px 2px 20px;
    list-style: none;
    height: 40px;
  }

  .nav-menu span {
    background-color: #281354;
    font-family: "Lato";

`;

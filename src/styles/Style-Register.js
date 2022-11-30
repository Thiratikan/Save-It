import styled from "styled-components";

export const Form = styled.div`
  span {
    color: red;
    display: none;
  }
  input:invalid[focus="true"] {
    border: 1px solid red;
  }
  input:invalid[focus="true"] ~ span {
    display: block;
  }
`;

export const Tap = styled.div`
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50px;
    background-color: white;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.274);
    box-sizing: content-box;
    position: relative;
    outline: none;
  }
  .active-tabs {
    background: white;
    border-bottom: 1px solid transparent;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  }
  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .active-content {
    display: block;
  }
`;

import styled from "styled-components";

export const TopTab = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .container {
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 300px;
    background: white;
    margin: 100px auto 0;
    word-break: break-all;
    border: 1px solid rgba(0, 0, 0, 0.274);
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 41.9%;
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
export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Form = styled.div`
  span {
    color: red;
    display: none;
    font-size: 13px;
  }
  input {
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-bottom: 5px;
  }
  input:invalid[focus="true"] {
    border: 1px solid red;
  }
  input:invalid[focus="true"] ~ span {
    display: block;
  }
  img {
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
  }
`;

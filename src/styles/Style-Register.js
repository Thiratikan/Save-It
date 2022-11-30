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

import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 250px;
  background: ${(props) => props.theme["gray-800"]};

  img {
    position: relative;
    top: 42px;
    left: 62px;
  }
`;

import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;
    height: 65px;
    background: ${props => props.theme["gray-800"]};

    h1 {
       color: ${props => props.theme.white};
    }
`
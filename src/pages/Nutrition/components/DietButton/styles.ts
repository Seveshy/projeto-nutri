import styled from "styled-components";

export const ContainerDiet = styled.button`
    background: ${props => props.theme["gray-800"]};
    padding: 14px;
    width: 250px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: ${props => props.theme["white"]};
`
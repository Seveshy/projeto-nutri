import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerButton = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
`

export const Wrapper = styled.div`
    background: ${props => props.theme.white};
    width: 80%;
    margin-top: 14px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.white};

  width: 100%;
  max-width: 1220px;
  margin-top: -6rem;
  padding: 0 1.5rem;
  border-radius: 6px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const NutritionTable = styled.table`
  width: 80%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: auto;
  padding: 52px 0;

  svg {
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }

  td {
    color: ${(props) => props.theme["white"]};
    padding: 1.25rem;
    background: ${(props) => props.theme["gray-800"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

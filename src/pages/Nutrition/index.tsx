import { ButtonDiet } from "./components/DietButton";
import { Autocomplete } from "@autocomplete/material-ui";

import { Container, ContainerButton, NutritionTable, Wrapper } from "./styles";
import { useState } from "react";
import { Trash } from "phosphor-react";

const options = ["Afghanistan", "Albania", "Algeria", "Andorra"];

const getOptions = (q: string) => {
  let query = new RegExp(q);
  return options.filter((o) => query.test(o));
};

export function Nutrition() {
  const [text, setText] = useState("");

  function handleDiet(event: any) {
    setText(event.target.value);
  }

  return (
    <Container>
      <ContainerButton>
        <Autocomplete
          onChange={handleDiet}
          selectOnBlur
          placeholder="Buscar dieta"
          requireMatch
          getOptions={getOptions}
          query={text}
        />
        <ButtonDiet />
      </ContainerButton>
      <Wrapper>
        <NutritionTable>
          <tbody>
            <tr>
              <td>Manhã</td>
              <td width="50%">Banana</td>
              <td> 500 gramas </td>
              <td>10:00 horas</td>
              <td>
                <Trash size={26} color="#fff" />
              </td>
            </tr>
          </tbody>
        </NutritionTable>
      </Wrapper>
    </Container>
  );
}

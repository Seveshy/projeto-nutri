import { ButtonDiet } from "./components/DietButton";
import { Autocomplete } from "@autocomplete/material-ui";

import { Container, ContainerButton, NutritionTable, Wrapper } from "./styles";
import { useContext, useState } from "react";
import { Trash } from "phosphor-react";
import { NutritionContext } from "../../context/NutritionContext";

const options = ["Afghanistan", "Albania", "Algeria", "Andorra"];

const getOptions = (q: string) => {
  let query = new RegExp(q);
  return options.filter((o) => query.test(o));
};

export function Nutrition() {
  const { nutritions, deleteDiet } = useContext(NutritionContext);
  const [text, setText] = useState("");

  function handleDiet(event: any) {
    setText(event.target.value);
  }

  function handleDeleteDiet(diet: number) {
    deleteDiet(diet);
  }

  console.log(nutritions);

  return (
    <Container>
      <Wrapper>
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
        <NutritionTable>
          <tbody>
            {nutritions.map((diet, index) => {
              return (
                <tr key={diet.id}>
                  <td>{diet.period}</td>
                  <td>{diet.food}</td>
                  <td> {diet.ammount} {" "} gramas</td>
                  <td>{diet.hour}</td>
                  <td>
                    <Trash
                      onClick={() => handleDeleteDiet(index)}
                      size={26}
                      color="#fff"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </NutritionTable>
      </Wrapper>
    </Container>
  );
}

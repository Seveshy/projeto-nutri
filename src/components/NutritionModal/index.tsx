import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay, Title } from "./styles";

export function NutritionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Cadastrar alimento</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Tipo de dieta" required />
          <input type="text" placeholder="Alimento" required />
          <input type="number" placeholder="Quantidade" required />
          <input type="text" placeholder="Horário" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
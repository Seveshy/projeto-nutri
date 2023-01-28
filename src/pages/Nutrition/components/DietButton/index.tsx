import { ContainerDiet } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { NutritionModal } from "../../../../components/NutritionModal";

export function ButtonDiet() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ContainerDiet>Criar uma dieta</ContainerDiet>
      </Dialog.Trigger>
      <NutritionModal />
    </Dialog.Root>
  );
}

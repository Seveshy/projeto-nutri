import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay, Title } from "./styles";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const newDietFormSchema = z.object({
  type: z.string(),
  food: z.string(),
  ammount: z.number(),
  hour: z.string(),
});

type NewDietFormInput = z.infer<typeof newDietFormSchema>;

export function NutritionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewDietFormInput>({
    resolver: zodResolver(newDietFormSchema),
  });

  function handleCreateNewDiet(data: NewDietFormInput) {
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Cadastrar alimento</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewDiet)}>
          <input
            type="text"
            placeholder="Tipo de dieta"
            required
            {...register("type")}
          />
          <input
            type="text"
            placeholder="Alimento"
            required
            {...register("food")}
          />
          <input
            type="number"
            placeholder="Quantidade"
            required
            {...register("ammount", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Horário"
            required
            {...register("hour")}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

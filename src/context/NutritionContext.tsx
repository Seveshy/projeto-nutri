import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface NutritionType {
  id: number;
  period: string;
  food: string;
  ammount: number;
  hour: string;
}

interface CreateDietType {
  period: string;
  food: string;
  ammount: number;
  hour: string;
}

interface NutritionContextType {
  nutritions: NutritionType[];
  deleteDiet: (diet: number) => void;
  createDiet: (data: CreateDietType, reset: any) => Promise<void>;
}

export const NutritionContext = createContext({} as NutritionContextType);

interface NutritionProviderProps {
  children: ReactNode;
}

export function NutritionProvider({ children }: NutritionProviderProps) {
  const [nutritions, setNutritions] = useState<NutritionType[]>([]);

  useEffect(() => {
    api.get("diet").then((response) => setNutritions(response.data));
  }, []);

  function deleteDiet(diet: number) {
    setNutritions([...nutritions.filter((_, index) => index !== diet)]);
    api.delete(`diet/${diet}`);
    console.log(diet);
  }

  async function createDiet(data: CreateDietType, reset: any) {
    const { period, food, ammount, hour } = data;

    const response = await api.post("diet", {
      period,
      food,
      ammount,
      hour,
      createdAt: new Date(),
    });

    setNutritions((state) => [response.data, ...state]);

    reset();
  }

  return (
    <NutritionContext.Provider value={{ nutritions, deleteDiet, createDiet }}>
      {children}
    </NutritionContext.Provider>
  );
}

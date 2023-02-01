import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface NutritionType {
  id: number;
  period: string;
  food: string;
  ammount: number;
  hour: string;
}

interface NutritionContextType {
  nutritions: NutritionType[];
  deleteDiet: (diet: number) => void
}

export const NutritionContext = createContext({} as NutritionContextType);

interface NutritionProviderProps {
  children: ReactNode;
}

export function NutritionProvider({ children }: NutritionProviderProps) {
  const [nutritions, setNutritions] = useState<NutritionType[]>([]);

  useEffect(() => {
    api.get(("diet")).then(response => setNutritions(response.data))
  }, []);

  function deleteDiet(diet: number) {
    setNutritions([...nutritions.filter((_, index) => index !== diet)])
    console.log(diet);
  }


  return (
    <NutritionContext.Provider
      value={{ nutritions, deleteDiet }}
    >
      {children}
    </NutritionContext.Provider>
  );
}

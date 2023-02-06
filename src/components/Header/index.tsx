import { ContainerHeader } from "./styles";
import logoDiet from "../../assets/diet.png";

export function Header() {
  return (
    <ContainerHeader>
      <img src={logoDiet} alt="Logo" />
    </ContainerHeader>
  );
}

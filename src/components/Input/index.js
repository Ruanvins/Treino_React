/*  Componente Input que contém o campo de entrada de dados da calculadora */
import { InputContainer } from "./styles";

const Input = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;

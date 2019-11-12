import styled from "styled-components";
import { Colors } from "Styles";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input.attrs({
  placeholder: "Pesquisar..."
})`
  padding: 10px;
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  width: 100%;
`;

import styled from "styled-components";
import { Colors } from "Styles";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const Form = styled.form``;

export const Label = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.border};
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${Colors.border};
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  border: ${props => (props.outline ? "none" : `1px solid ${Colors.border}`)};
  border-radius: 4px;
  background-color: ${props =>
    props.outline ? "transparent" : Colors.background};
  cursor: pointer;
  width: 200px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    color: ${props => (props.outline ? Colors.highlightBlue : "black")};
    background-color: ${props =>
      props.outline ? "transparent" : Colors.highlight};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

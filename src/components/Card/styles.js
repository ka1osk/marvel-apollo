import styled from "styled-components";
import { Colors } from "Styles";

export const Container = styled.div`
  width: 200px;
  height: auto;
  margin: 10px;
  display: inline-block;
  padding: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-size: 1em;
  padding: 10px;
`;

export const Image = styled.div`
  width: 190px;
  height: 230px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px;
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  background-color: ${Colors.fundo};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.highlight};
  }
`;

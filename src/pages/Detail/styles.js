import styled from "styled-components";
import { Colors } from "Styles";

export const Container = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

export const BackButton = styled.button`
  margin: 10px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #fff;
  z-index: 1001;

  &:hover {
    color: ${Colors.highlightBlue};
  }
`;

export const ContentContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 40px;
`;

export const ImageContainerbackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 350px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
`;

export const Image = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 4px;
`;

export const ButtonEdit = styled.button`
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const SeriesTitle = styled.strong`
  position: relative;
  display: block;
  margin: 20px 0 10px 0;
  padding-bottom: 2px;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 20px;
    height: 2px;
    background-color: ${Colors.highlight};
  }
`;

export const SeriesList = styled.ol`
  list-style: none;
`;

export const SeriesItem = styled.li``;

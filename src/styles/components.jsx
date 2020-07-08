import styled from 'styled-components';

export const ConvictionsSelector = styled.select`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkGrey};
  width: 80%;
  height: 5vh;
  border: none;
  font-size: 1rem;
  border-radius: 2vh;
`;

export const ConvictionOption = styled.option`
  color: ${(props) => props.theme.white};
`;

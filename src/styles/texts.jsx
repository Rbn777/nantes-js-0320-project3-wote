import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'MuseoBold';
  font-size: 2.5rem;
  margin: 3vh;
  color: ${(props) => props.theme.white};
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  padding: 10px;
  font-family: 'MuseoBold';
  align-self: center;
  color: white;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const TextParagraph = styled.p`
  color: ${(props) => props.theme.white};
  text-align: left;
`;

export const DivCursorTitle = styled.h3`
  font-family: 'MuseoBold';
`;

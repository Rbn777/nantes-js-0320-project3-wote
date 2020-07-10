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
  width: 70%;
  align-self: center;
  color: white;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const TextParagraph = styled.p`
  color: ${(props) => props.theme.white};
  color: ${(props) => props.grey && props.theme.darkGrey};
  text-align: left;
`;

export const TitleIndicator = styled.h3`
  padding-left: 1rem;
  text-align: left;
  font-family: 'MuseoBold';
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.white};
  color: ${(props) => props.grey && props.theme.darkGrey};
`;

export const DivCursorTitle = styled.h3`
  font-family: 'MuseoBold';
`;

export const TitleComparison = styled(TitleIndicator)`
  padding-left: 0rem;
`;

export const TitleIndicatorDetail = styled(TitleIndicator)`
  color: ${(props) => props.theme.darkGrey};
  padding-left: 0.2rem;
`;

export const NoteColor = styled.p`
  font-size: 1.2rem;

  &.redNote {
    color: ${(props) => props.theme.red};
  }

  &.greenNote {
    color: ${(props) => props.theme.green};
  }

  &.yellowNote {
    color: ${(props) => props.theme.yellow};
  }
`;

export const DetailIndicatorTitle = styled.p`
  color: ${(props) => props.theme.darkGrey};
  text-align: ${(props) => props.start && 'start'};
`;

export const TitleItemDetail = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.green && props.theme.mainGreen};
  background-color: ${(props) => props.salmon && props.theme.salmon};
  background-color: ${(props) => props.blue && props.theme.mainBlue};
`;

export const TextSource = styled.p`
  margin: 0.2rem 0;
`;

import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  text-align: center;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const FlexAlignSelfEnd = styled.div`
  align-self: end;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.lightGrey};
`;

export const MainHeaderEcology = styled(MainHeader)`
  background-color: ${(props) => props.theme.mainGreen};
`;

export const MainHeaderRights = styled(MainHeader)`
  background-color: ${(props) => props.theme.salmon};
`;

export const MainHeaderSociety = styled(MainHeader)`
  background-color: ${(props) => props.theme.mainBlue};
`;

export const MainContainer = styled.div`
  text-align: center;
  padding: 30px;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.darkGrey};
`;

export const MainContainerWithHeader = styled(MainContainer)`
  padding-top: 9rem;
`;

export const DivCursor = styled.div`
  color: ${(props) => props.theme.white};
  width: 100%;
  text-align: justify;
  border-bottom: 0.2px solid ${(props) => props.theme.white};
  padding: 3vh 0vh;
`;

export const DivButtonConvictions = styled.div`
  color: ${(props) => props.theme.white};
  margin: 20px;
`;

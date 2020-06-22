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
  height: 10vh;
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.lightGrey};
`;

export const MainContainer = styled.div`
  text-align: center;
  padding: 30px;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.darkGrey};
`;

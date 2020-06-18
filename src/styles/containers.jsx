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
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.grey};
`;

export const MainContainer = styled.div`
  margin: 15px;
  text-align: center;
`;

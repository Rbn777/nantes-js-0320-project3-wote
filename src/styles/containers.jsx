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
  justify-content: ${(props) => props.between && 'space-between'};
  cursor: ${(props) => props.pointer && 'pointer'};
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

export const ContainerIndicators = styled(FlexDiv)`
  margin: 1.2rem 0rem;
  color: white;
`;

export const WrapperIndicator = styled(FlexDiv)`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
`;

export const WrapperCaretIconGreen = styled.div`
  color: ${(props) => props.theme.mainGreen};
  transform: rotate(0deg);
  transition: all 100ms ease-in-out;

  &.rotate {
    transform: rotate(90deg);
  }
`;

export const WrapperCaretIconSalmon = styled.div`
  color: ${(props) => props.theme.salmon};
  transform: rotate(0deg);
  transition: all 100ms ease-in-out;

  &.rotate {
    transform: rotate(90deg);
  }
`;

export const WrapperCaretIconBlue = styled.div`
  color: ${(props) => props.theme.mainBlue};
  transform: rotate(0deg);
  transition: all 100ms ease-in-out;

  &.rotate {
    transform: rotate(90deg);
  }
`;

export const DetailsIndicatorDiv = styled.div`
  margin-top: 0.5rem;

  &.hide {
    display: none;
  }
`;

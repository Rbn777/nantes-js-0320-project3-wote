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
  height: 100px;
  width: 100%;
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

export const CountryCard = styled.div`
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 10px;
  width: 100%;
  margin: 20px 0px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const WrapperCountryText = styled(FlexDiv)`
  cursor: pointer;
`;

export const RoundNote = styled.div`
  border-radius: 50px;
  width: 80px;
  height: 40px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.red {
    background-color: ${(props) => props.theme.red};
  }

  &.green {
    background-color: ${(props) => props.theme.green};
  }

  &.yellow {
    background-color: ${(props) => props.theme.yellow};
  }
`;

export const DeleteCard = styled.button`
  background-color: ${(props) => props.theme.darkGrey};
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: none;
  width: 25px;
  height: 25px;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.lightGrey};
    border: 1px solid ${(props) => props.theme.darkGrey};
  }
`;

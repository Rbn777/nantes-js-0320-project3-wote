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
  justify-content: ${(props) => props.center && 'center'};
  cursor: ${(props) => props.pointer && 'pointer'};
  margin-bottom: ${(props) => props.mgBottom && '0.5rem'};
  margin-top: ${(props) => props.mgTop && '1rem'};
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateCol};
  grid-template-rows: ${(props) => props.templateRow};
  column-gap: ${(props) => props.ColGap};
  row-gap: ${(props) => props.RowGap};
  justify-items: ${(props) => props.jstfyItems};
  align-items: ${(props) => props.algnItems};
  justify-content: ${(props) => props.jstfyContent};
  align-content: ${(props) => props.algnContent};
  grid-column: ${(props) => props.gdColumn};
  grid-row: ${(props) => props.gdRow};
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
  z-index: 500;
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

export const SelectWrapper = styled(FlexDiv)`
  ${(props) => props.theme.mediaMax.xxSmall`
    justify-content: space-between;
  `};
`;

export const WrapperIndicator = styled(FlexDiv)`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
`;

export const WrapperCaretIcon = styled.div`
  color: ${(props) => props.greenIcon && props.theme.mainGreen};
  color: ${(props) => props.salmonIcon && props.theme.salmon};
  color: ${(props) => props.blueIcon && props.theme.mainBlue};
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
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const WrapperCountryText = styled(FlexDiv)`
  cursor: ${(props) => (props.noPointer ? 'unset' : 'pointer')};
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
  margin-left: 15px;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.lightGrey};
    border: 1px solid ${(props) => props.theme.darkGrey};
  }
  &.noDisplay {
    display: none;
  }
`;

export const ContainerAccordions = styled(FlexDiv)`
  margin: 2rem 0;
`;

export const WrapperAllAccordions = styled(FlexDiv)``;

export const WrapperAccordion = styled(FlexDiv)`
  margin-bottom: 1rem;
`;

export const WrapperCaretIconGrey = styled.div`
  color: ${(props) => props.theme.darkGrey};
  margin: 0rem 0.5rem;
  padding-top: 0.2rem;
  transform: rotate(0deg);
  transition: all 100ms ease-in-out;

  &.rotate {
    transform: rotate(90deg);
  }
`;

export const WrapperHeadAccordion = styled(FlexDiv)`
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: ${(props) => (props.topOnly ? '5px 5px 0 0' : '5px')};
  justify-content: space-between;
  padding: ${(props) => props.padDetailed && '0.5rem'};

  &.noBorderRadius {
    border-radius: 5px 5px 0 0;
  }
`;

export const WrapperTitleAccordion = styled(FlexDiv)`
  align-self: center;
`;

export const NoteDetails = styled.div`
  height: 100%;
  padding: 0.8rem;
  border-radius: 0 5px 5px 0;
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

export const DetailsIndicators = styled(DetailsIndicatorDiv)`
  display: none;

  &.open {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    padding: 0.5rem 1.2rem;
    margin: 0;
    background-color: ${(props) => props.theme.white};
  }
`;

export const DetailItem = styled(FlexDiv)`
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

export const FlexDivTitleScore = styled(FlexDiv)`
  position: sticky;
  top: 6rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.darkGrey};
  border-radius: 0 0 5px 5px;
  z-index: 2;
`;

export const FlexDivAccordionDetailed = styled(FlexDiv)`
  width: ${(props) => props.all && '100%'};
  margin-bottom: 1rem;
`;

export const DetailedDiv = styled.div`
  text-align: center;
  padding: 0.5rem;
  border-right: ${(props) =>
    props.borderRight ? `1px solid ${props.theme.darkGrey}` : 'none'};
  background-color: ${(props) =>
    props.white ? props.theme.white : props.theme.lightGrey};

  &:last-child {
    border-right: none;
  }
`;

export const DetailedDivSpec = styled(DetailedDiv)`
  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const DetailedNoteCountry = styled(DetailedDiv)`
  display: flex;
  justify-content: center;
`;

export const NoteDiv = styled.div`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkGrey};
  font-weight: bold;
  padding: 0.8rem 0;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const NoteDivColor = styled.div`
  width: 50%;
  padding: 0.2em;
  border-radius: 5px;
  color: ${(props) => props.theme.white};

  &.redDiv {
    background-color: ${(props) => props.theme.red};
  }

  &.greenDiv {
    background-color: ${(props) => props.theme.green};
  }

  &.yellowDiv {
    background-color: ${(props) => props.theme.yellow};
  }

  &.greyDiv {
    background-color: ${(props) => props.theme.darkGrey};
  }
`;

export const ContainerDetailsIndicator = styled(FlexDiv)`
  text-align: left;
`;

export const WrapperItemDetail = styled(FlexDiv)`
  margin: 0.5rem 0;
  border: ${(props) => props.green && `2px solid ${props.theme.mainGreen}`};
  border: ${(props) => props.salmon && `2px solid ${props.theme.salmon}`};
  border: ${(props) => props.blue && `2px solid ${props.theme.mainBlue}`};
`;

export const WrapperContentItemDetail = styled(FlexDiv)`
  padding: 0.5rem;
  color: ${(props) => props.theme.darkGrey};
  background-color: ${(props) => props.theme.white};
`;

export const DivCarte = styled.div`
  border: ${(props) => props.green && `2px solid ${props.theme.mainGreen}`};
  border: ${(props) => props.salmon && `2px solid ${props.theme.salmon}`};
  border: ${(props) => props.blue && `2px solid ${props.theme.mainBlue}`};
`;

export const LogoSourceDiv = styled(FlexDiv)`
  margin-bottom: 0.8rem;
  justify-content: center;
`;

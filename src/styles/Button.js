import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;
  width: 25%;
  height: 10%;
  background: ${(props) => (props.primary ? 'red' : 'yellow')};
  border: 1px solid pink;
`;

export const NewButton = styled.button`
  color: blue;
`;

export const MainWrapper = styled.div`
  background: red;
  height: 100vh;
  width: 100%;

  ${(props) => props.theme.mediaMax.small`
    background: yellow;
    font-size: 1.6rem;
    margin: 0;
  `};
`;

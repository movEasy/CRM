import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.paddingContainer};
  padding-right: ${props => props.theme.paddingContainer};
  justify-content: center;
  height: 50rem;
  width: 100%;
`;

export const ElementContainer = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15rem;
`;

export const Dashboard = styled.div`
  h2 {
    margin: 0;
    color: ${props => props.theme.lightBlue};
  }
`;

export const Legends = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 2rem;

  div {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 1rem;
      padding-left: 0.5rem;
    }
  }
`;

export const InnerCircle = styled.div`
  width: 1rem;
  height: 1rem;
  color: black;
  background-color: ${props =>
    (props.turquoise && '#473698') ||
    (props.darkBlue && '#460A68') ||
    (props.eggplant && '#6D2077') ||
    (props.purple && '#00A2A1')};
  border-radius: 2rem;
`;

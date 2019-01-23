import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-left: 1rem;
  background-color: ${props => props.theme.lightGray};

  div {
    /* flex: 0 1 33.33%; */
    height: 37.5%;

    p {
      margin: 0;
      font-size: 1rem;
    }
  }

  div:nth-child(1) {
    height: 25%;
    color: ${props => props.theme.mediumBlue};
    font-weight: 600;
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

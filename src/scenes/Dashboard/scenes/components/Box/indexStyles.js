import styled from 'styled-components';

export const WrapperMain = styled.div`
  width: 100%;
  max-height: 48%;
  min-width: 60rem;
  min-height: 20rem;
  border-radius: 0.4rem;
  overflow: hidden;

  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  border-radius: 0.4rem 0.4rem 0 0;
  min-height: 3rem;
  max-height: 4rem;
  height: 3rem;

  padding-left: 1rem;
  padding-right: 1.1rem;

  color: black;

  h4:nth-child(1) {
    flex: 0 1 24.5%;
    /* max-width: 10rem; */
    margin: 0;
    color: ${props => props.theme.black};
  }

  h4:nth-child(2) {
    flex: 0 1 24.5%;
  }

  h4:nth-child(3) {
    flex: 0 1 51%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  height: 4rem;

  button {
    text-align: right;
    cursor: pointer;
    height: 3rem;
    width: 20rem;
    color: white;
    background-color: white;
    color: #0091da;
    border: none;
    font-weight: 800;
  }
`;

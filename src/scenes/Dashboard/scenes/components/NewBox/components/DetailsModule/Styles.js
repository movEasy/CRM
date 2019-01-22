import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50rem;
  width: 60rem;
  z-index: 500;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border: 1px solid black;
  background-color: ${props => props.theme.lightGray};
  padding: 0 1rem 1rem 1rem;

  p {
    margin-bottom: 0;
  }

  .details-enter {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  align-items: center;

  h3 {
    margin: 0;
    color: ${props => props.theme.mediumBlue};
  }

  div > p {
    margin: 0;
    cursor: pointer;
  }
`;

export const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60%;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const ProjectNotes = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 20%;
  background-color: ${props => props.theme.white};
`;

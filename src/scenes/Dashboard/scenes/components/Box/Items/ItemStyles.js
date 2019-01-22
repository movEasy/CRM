import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-left: 1rem;

  /* flex: 1 0 auto; */
  /* 
  min-height: 3rem;
  max-height: 4rem; */
  height: 3rem;

  :hover {
    color: ${props => props.theme.lightBlue};
  }

  font-size: 1rem;

  svg {
    position: relative;
    top: 1;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;

    &.complete {
      color: green;
    }

    &.not-complete {
      color: red;
    }
  }

  span {
    max-height: 6rem;
    p {
      margin: 0;
      padding-left: 0.1rem;
      padding-top: 0.1rem;
    }
  }

  span:nth-child(1) {
    flex: 0 1 25%;
    display: flex;
    align-items: center;
  }

  span:nth-child(2) {
    flex: 0 1 25%;
    text-align: left;
  }

  span:nth-child(3) {
    flex: 0 1 50%;
    text-align: left;
  }
`;

export const ItemWrapperDepartments = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: 1rem;
  margin-right: 1rem;

  flex: 1 1 auto;
  max-height: 6rem;
  min-height: 4rem;

  :hover {
    color: ${props => props.theme.lightBlue};
  }

  font-size: 1rem;

  svg {
    position: relative;
    top: 1;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;

    &.complete {
      color: green;
    }

    &.not-complete {
      color: red;
    }
  }

  span {
    max-height: 6rem;
    flex: 1;

    p {
      margin: 0;
    }
  }

  span:last-child {
    text-align: center;
  }
`;

export const HoverTask = styled.span`
  position: absolute;
  top: 50%;
  left: 35%;
  background-color: white !important;
  border: 1px solid black;
  width: 50rem;
  height: 30rem;
  z-index: 500;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;

  h3 {
    color: ${props => props.theme.darkBlue};
    margin: 0;
  }

  div.task-hover__date-and-person {
    display: flex;
    justify-content: space-between;
    width: 75%;
    background-color: white !important;
  }

  div.task-hover__text-area {
    width: 100%;
    height: 50%;
    background-color: white !important;

    textarea {
      width: 100%;
      height: 100%;
    }
  }

  div.task-hover__submit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: white !important;
  }
`;

import styled from 'styled-components';

export const ItemElement = styled.p`
  display: flex;
  align-items: center;
  flex: 1 1 100px;
  height: 50px;
  margin: 0;
  font-size: 1.2rem;

  .completed {
    color: green;
  }

  .unCompleted {
    color: red;
  }
`;

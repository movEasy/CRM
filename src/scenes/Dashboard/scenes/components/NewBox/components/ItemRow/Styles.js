import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 30px;
  /* min-height: 30px;
  max-height: 40px; */
  height: 3rem;
  text-align: left;
  align-items: center;
  cursor: pointer;

  p:nth-child(2) {
    flex: 1 1 200px;
  }
`;

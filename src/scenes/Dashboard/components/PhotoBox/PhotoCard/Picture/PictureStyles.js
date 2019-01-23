import styled from 'styled-components';

export const PictureWrapper = styled.div`
  display: flex;
  width: 50%;
  background-color: white;
  box-shadow: 0.1rem 0.5rem 0.9rem black;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

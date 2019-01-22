import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  flex: 1 1 100%;
  max-height: 48%;
  /* height: 17rem; */
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.4rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  min-height: 3rem;
  max-height: 4rem;
  padding-top: 1rem;

  h4 {
    flex: 1 1 100px;
    margin: 0;
    color: ${props => props.theme.black};
  }

  h4:nth-child(2) {
    flex: 1 1 200px;
  }

  h4:nth-child(3) {
    flex: 1 1 120px;
  }
`;

export const ItemRowWrapper = styled.div`
  /* height: 11rem; */
  flex-basis: 17rem;
  overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
  padding-bottom: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  text-align: center;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border: 0.1rem solid
    ${props => (props.inverted && props.theme.white) || props.theme.primary};
  color: ${props =>
    (props.white && props.theme.black) || (props.black && props.theme.white)};
  font-size: ${props =>
    (props.smallText && '1rem') ||
    (props.mediumText && '1rem') ||
    (props.largeText && '1.6rem')};
  background-color: ${props =>
    (props.lightGray && props.theme.lightGray) ||
    (props.white && props.theme.white) ||
    (props.danger && props.theme.danger) ||
    ((props.inverted || props.link) && 'transparent')};
  width: ${props =>
    (props.large && '12rem') ||
    (props.medium && '9rem') ||
    (props.small && '7rem')};

  height: ${props =>
    (props.large && '5rem') ||
    (props.medium && '3rem') ||
    (props.small && '1.5rem')};
`;

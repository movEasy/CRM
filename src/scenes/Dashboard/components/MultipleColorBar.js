import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    align-content: stretch;
    width: 100%;
    height: 1.5rem;
`;

const Bar = styled.div`
    background-color: ${ props => 
        (props.darkBlue && props.theme.darkBlue)
        ||(props.mediumBlue && props.theme.mediumBlue)
        ||(props.lightBlue && props.theme.lightBlue)
        ||(props.blueViolet && props.theme.blueViolet)
        ||(props.eggplant && props.theme.eggplant)
        ||(props.purple && props.theme.purple)
        ||(props.turquoise && props.theme.turquoise)
    };
    flex: 1 1 auto;
`;

const MultipleColorBar = () => {
  return (
    <Container>
      <Bar darkBlue/>
      <Bar mediumBlue/>
      <Bar lightBlue/>
      <Bar blueViolet/>
      <Bar eggplant/>
      <Bar purple/>
      <Bar turquoise/>
    </Container>
  )
}

export default  MultipleColorBar;
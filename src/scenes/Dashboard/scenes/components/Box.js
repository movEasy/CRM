import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.3rem;
    width: 50rem;
    height: 18rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.19), 0 0.6rem 0.6rem rgba(0,0,0,0.20);
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;

    h5 {
        margin: 0;
    }
`;

const Content = styled.div`
    display: flex; 
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
`;

const Box = (props) => {
    let header;

    if ( props.data.headers === null ) {
        header = '';
    } else {
        header = (
            <Header>
                {props.data.headers.map(el => (
                    <h5 key={el}>{el}</h5>
                ))}
            </Header>)
    }

  return (
    <Container>
        {header}
        <Content>
            {props.children}
        </Content>
    </Container>
  )
}

export default Box;
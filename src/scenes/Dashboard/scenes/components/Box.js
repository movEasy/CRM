import React, { Component } from 'react';
import styled from 'styled-components';

import BoxItem from './BoxItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.3rem;
    width: 40rem;
    height: 18rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.19), 0 0.6rem 0.6rem rgba(0,0,0,0.20);
    margin-bottom: 2rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
    border-radius: 1.3rem 1.3rem 0 0;
    background-color: ${ props => props.theme.turquoise }

    h5 {
        margin: 0;
        color: ${ props => props.theme.white }
    }
`;

const Content = styled.div`
    display: flex; 
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    cursor: pointer;
`;

class Box extends Component {

    state = {
        elementSelected: false,
        id: '',
    }

    handleElementSelect = () => {
        this.setState( prevState => ({
            elementSelected: !prevState.elementSelected
        }))
    }

    render() {
        console.log(this.state.elementSelected);

        const { headers, payload, details } = this.props;
        
        let header;

        if ( this.props.headers === null ) {
            header = '';
        } else {
            header = (
                <Header>
                    {headers.map(el => (
                        <h5 key={el}>{el}</h5>
                    ))}
                </Header>)
        }
        
        console.log(Object.values(payload));

        return (
            <Container>
                {header}
                <Content>
                    { Object.values(payload).map(el => <BoxItem handleElementSelect={this.handleElementSelect} isSelected={this.state.elementSelected} key={'__ID__' + el['id']} info={el['info']} details={details} />)}
                </Content>
                <button>Click</button>
            </Container>
        )
    }
}

export default Box;
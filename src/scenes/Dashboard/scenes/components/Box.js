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
        elementSelected: false
    }

    handleElementSelect = () => {
        this.setState( prevState => ({
            elementSelected: !prevState.elementSelected
        }))
    }

    render() {

        const { headers, payload } = this.props;
        
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
        
        console.log(payload)
        // console.log(Object.entries(payload['element1'].Object.values().map(el => el)));
        return (
            <Container>
                {header}
                <Content>
                    { Object.values(payload).map(el => <BoxItem key={'__ID__' + el} info={el['info']} />)}
                </Content>
                {/* <Content>
                    <BoxItem info={['XXX1', 'Corporate Income Tax', '10']} isSelected={this.state.elementSelected} payload={this.props.payload} handleElementSelect={this.handleElementSelect} />
                    <BoxItem info={['XXX2', 'Corporate Income Tax', '10']} selectItem={(id) => this.handleSelectItem(id)} />
                    <BoxItem info={['XXX3', 'Corporate Income Tax', '10']} selectItem={(id) => this.handleSelectItem(id)} />
                </Content> */}
                <button>Click</button>
            </Container>
        )
    }
}

export default Box;
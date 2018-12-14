import React, { Component } from 'react'
import styled from 'styled-components';

// Import components
import Box from './components/Box';
import BoxItem from './components/BoxItem';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    border: 1px solid black;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const data = [
    ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
    ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
    ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
    ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
    ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
    ['4016146', 'M&PS Siemens Project 7P', 'notComplete']
]

class Main extends Component {
    state = {
        itemSelect: false,
    }

    handleSelectItem = (id) => {
        if (id === 'XXX1') {
            this.setState({
                itemSelect: true
            })
        } else {
            return;
        }
        
    }

    render() {
        let box;

        if ( this.state.itemSelect === false ) {
            box = (
                <Box data={{headers: ['Service line', 'Description', 'No. Projects']}}>
                    <BoxItem info={['XXX1', 'Corporate Income Tax', '10']} selectItem={(id) => this.handleSelectItem(id)}/>
                    <BoxItem info={['XXX2', 'Corporate Income Tax', '10']} selectItem={(id) => this.handleSelectItem(id)} />
                    <BoxItem info={['XXX3', 'Corporate Income Tax', '10']} selectItem={(id) => this.handleSelectItem(id)} />
                </Box>
            )
        } else {
            box = (
                <Box data={{headers: null}}>
                    {data.map(el => <BoxItem info={el} key={'__ID__' + Math.random()} />)}
                </Box>
            )
        }

        return (
            <Container>
                <BoxContainer>
                    {box}
                    <br />
                    <Box data={{headers: null}}/>
                </BoxContainer>
            </Container>
        )
    }
}

export default Main;
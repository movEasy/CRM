import React, { Component } from 'react'
import styled from 'styled-components';

// Import components
import Box from './components/Box';
import BoxItem from './components/BoxItem';
import Index from './components/Box/index';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1.5rem;
`;

const data = {
    departments:  {
        department1:{
            id: '1', 
            infoItem: ['XXX1', 'Corporate Income Tax', '10'],
            details: [
                ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
                ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
                ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
                ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
            ]
        },
        department2:{
            id: '2', 
            infoItem: ['XXX2', 'Corporate Tax', '1']
        },
        department3:{
            id: '3', 
            infoItem: ['XXX3', 'Income Tax', '11']
        },
    }
}

const details = [
        ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
        ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
        ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
        ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
        ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
        ['4016146', 'M&PS Siemens Project 7P', 'notComplete']
];

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

        // let box;

        // if ( this.state.itemSelect === false ) {
        //     box = (
        //         <Box data={{headers: ['Service line', 'Description', 'No. Projects']}} />
        //     )
        // } else {
        //     box = (
        //         <Box data={{headers: null}}>
        //             {data.map(el => <BoxItem info={el} key={'__ID__' + Math.random()} />)}
        //         </Box>
        //     )
        // }

        return (
            <Container>
                <BoxContainer>
                    <Index data={data} />
                    <Index data={data} />
                </BoxContainer>
            </Container>
        )
    }
}

export default Main;
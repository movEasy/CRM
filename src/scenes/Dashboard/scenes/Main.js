import React, { Component } from 'react'
import styled from 'styled-components';

// Import components
import Index from './components/Box/index';
import PieChart from './components/PieChart/PieChart';

import BarChart from '../../../stories/BarChart/BarChart';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    height: 50rem;
`;

const ElementContainer = styled.div`
    display: flex;
    height: 90%;
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

const data2 = {
    departments:  {
        department1:{
            id: '1', 
            infoItem: ['31-2012-2018', 'HL', 'Ryk falk for om vi skal lave et TP review(...)'],
            status: 'notComplete',
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
            status: 'complete',
            infoItem: ['notComplete', '01-04-2019', 'JA', 'Tag fat i Carsten omkring Mobility policy']
        },
    }
}

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

        return (
            <Container>
                <ElementContainer>
                    {/* <Index data={data} bgc='green' headers={['Service line', 'Description', 'No. projects']} /> */}
                    <Index data={data2} bgc='eggplant' headers={['Deadline', 'Keyperson', 'Task']}/>
                </ElementContainer>
                <ElementContainer>
                    <PieChart year='2018' />
                    <PieChart year='2017' />
                </ElementContainer>
                <ElementContainer>
                    <PieChart year='2018' />
                    <PieChart year='2017' />
                </ElementContainer>
                {/* <BarChart /> */}
            </Container>
        )
    }
}

export default Main;
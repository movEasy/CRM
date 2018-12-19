import React, { Component } from 'react';
import styled from 'styled-components';
import { VictoryLabel, VictoryBar, VictoryStack} from 'victory';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    /* height: 30rem;
    width: 15rem; */

    height: 100%;
    width: 100%;
`;

const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 0;
        margin-bottom: -2rem;
        font-size: 1.5rem;
    }
`;

const data1 = [
    { x:1, y: 17},
];

const data2 = [
    { x:1, y: 20},
];

const data3 = [
    { x:1, y: 60},
];

const data4 = [
    { x:1, y: 10},
];

const data5 = [
    { x:1, y: 17},
];

const data6 = [
    { x:1, y: 50},
];

const data7 = [
    { x:1, y: 30},
];

const data8 = [
    { x:1, y: 10},
];

const colors = ['gray', 'orange', 'green', 'magenta']


class BarChart extends Component {
    state = {  }
    render() { 
        return ( 
            <Wrapper>
            <BarWrapper>
            <h2>Expected</h2>
                <VictoryStack
                    domain={{x: [0, 1], y: [0, 100]}}
                    width={100}
                    style={{
                        data: {
                            strokeWidth: 15
                            }
                        }}
                >
                    <VictoryBar
                        labelComponent={<VictoryLabel dy={40}/>}
                        data={data4}
                        colorScale={['blue']}
                        labels={['3%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                        
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={90}/>}
                        data={data3}
                        colorScale={['green']}
                        labels={['60%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={52}/>}
                        data={data2}
                        colorScale={['yellow']}
                        labels={['20%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={35}/>}
                        data={data1}
                        colorScale={['red']}
                        labels={['17%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                </VictoryStack>
                </BarWrapper>
                <BarWrapper>
                <h2>Achieved</h2>
                <VictoryStack
                    domain={{x: [0, 1], y: [0, 100]}}
                    width={100}
                    style={{
                        data: {
                            strokeWidth: 15
                            }
                        }}
                >
                    <VictoryBar
                        labelComponent={<VictoryLabel dy={40}/>}
                        data={data8}
                        colorScale={['blue']}
                        labels={['3%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                        
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={60}/>}
                        data={data7}
                        colorScale={['green']}
                        labels={['28%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={80}/>}
                        data={data6}
                        colorScale={['yellow']}
                        labels={['40%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                    <VictoryBar 
                        labelComponent={<VictoryLabel dy={35}/>}
                        data={data5}
                        colorScale={['red']}
                        labels={['17%']}
                        style={{
                            labels: { fill: 'white', fontSize: '10'}
                        }}
                    />
                </VictoryStack>
                </BarWrapper>
            </Wrapper>
         );
    }
}
 
export default BarChart;
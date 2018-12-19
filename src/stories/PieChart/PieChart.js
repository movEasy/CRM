import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLegend, VictoryGroup, VictoryPolarAxis} from 'victory';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

class PieChart extends Component {
    state = {  }
    render() { 

        const data = [
            { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 9, y: 1 }
        ];

        const legendData = [
          { name: "CIT" }, { name: "TP" }, { name: "INDIRECT" }, { name: 'MPS'}
        ];

        return (
            <></>
        );
    }
}
 
export default PieChart;
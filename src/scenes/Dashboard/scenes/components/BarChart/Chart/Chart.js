import React from 'react';
import styled from 'styled-components';

import BarElement from '../BarElement/BarElement';

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 35%;

    .left-row:nth-child(1n) {
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
    }
`;

const Chart = ({ data, color }) => {
    const { elementColor } = color;

    return ( 
        <ChartWrapper>
            {Object.keys(data).map((el, i) => <BarElement data={data[el]} color={elementColor[i]} />)}
        </ChartWrapper>
     );
}
 
export default Chart;
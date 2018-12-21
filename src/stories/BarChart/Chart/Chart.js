import React from 'react';
import styled from 'styled-components';

import BarElement from '../BarElement/BarElement';

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 15rem;

    .left-row:nth-child(1n) {
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
    }
`;

const Chart = ({ data, color }) => {
    const { elementColor } = color;

    const { exp } = data;

    return ( 
        <ChartWrapper>
            {Object.values(data).map((el, i) => <BarElement data={el} color={elementColor[i]} />)}
        </ChartWrapper>
     );
}
 
export default Chart;
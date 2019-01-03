import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Chart = (props) => {
    const { elementColor } = props.color;

    return ( 
        <ChartWrapper>
            {Object.keys(props.data).map((el, i) => <BarElement data={props.data[el]} color={elementColor[i]} />)}
        </ChartWrapper>
     );
}

Chart.propTypes = {
    data: PropTypes.shape({
        gross_rev: PropTypes.object,
        rev: PropTypes.object,
        realized_rev: PropTypes.object,
        misc: PropTypes.object,
    }),
    color: PropTypes.object,
}
 
export default Chart;
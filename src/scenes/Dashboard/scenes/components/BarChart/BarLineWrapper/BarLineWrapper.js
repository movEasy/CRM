import React from 'react'
import styled from 'styled-components';

import BarLine from '../BarLine/BarLine';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
`;

const BarLineWrapper = ({ data, color }) => {

    const { ...elementColor } = color

    return ( 
        <Wrapper>
            {data.map((el, i) => <BarLine data={el} color={elementColor[i]} />)}
        </Wrapper>
     );

}
 
export default BarLineWrapper;
import React from 'react'
import styled from 'styled-components';

const BarLineEl = styled.div`
    height: ${ props => props.height && `${props.height}%` };
    position: relative;
    top: 0rem;
    left: 0rem;

    div {
        width: 100%;
        border-bottom: 0.01rem solid  ${ props => props.color };
        position: relative;
        top: 0rem;
        left: 0rem;
    }

    p {
        position: relative;
        top: 50%;
        bottom: 0rem;
        left: 1rem;
        margin: 0;
        font-size: 1rem;
    }
`;

const BarLine = ({ data, color }) => {
    console.log(data)
    return ( 
        <BarLineEl height={data[0]}>
            <div color={color} ><p>{data[1]}</p></div>
        </BarLineEl>
     );
}
 
export default BarLine;
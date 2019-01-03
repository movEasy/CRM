import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const BarLine = (props) => {

    return ( 
        <BarLineEl height={props.data[0]}>
            <div color={props.color} ><p>{props.data[1]}</p></div>
        </BarLineEl>
     );
}

BarLine.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string
}
 
export default BarLine;
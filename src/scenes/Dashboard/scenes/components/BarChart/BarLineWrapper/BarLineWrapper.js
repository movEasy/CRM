import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BarLine from '../BarLine/BarLine';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
`;

const BarLineWrapper = (props) => {

    const { ...elementColor } = props.color

    return ( 
        <Wrapper>
            {props.data.map((el, i) => <BarLine data={el} color={elementColor[i]} />)}
        </Wrapper>
     );

}

BarLineWrapper.propTypes = {
    data: PropTypes.array,
    color: PropTypes.arrayOf(PropTypes.string)
}
 
export default BarLineWrapper;
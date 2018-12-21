import React from 'react';
import styled from 'styled-components';

import BarLine from '../BarLine/BarLine';

const Bar = styled.div`
    display: flex;
    width: 100%;
    height: ${ props => props.height && `${props.height}%`};
`;

const El = styled.div`
    width: ${ props => 
        (props.width === 'small' && '20%')
        || (props.width === 'large' && '80%')
    };
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${ props => 
        (props.bgc === 0 && 'white' )
        || (props.bgc === 1 && 'black' )
    };
    
    background-color: ${ props => 
        (props.bgc === 0 && props.color )
        || (props.bgc === 1 && 'white')
    };

    border: ${ props => 
        props.borderColor === '' ? `` :
        `1px solid ${props.borderColor}` };

    p {
        margin: 0;
        line-break: strict;
        font-size: ${ props => props.text && '0.8rem'}
    }
`;

const BarElement = ({ data, color }) => {
    console.log(data);

    return ( 
        <Bar height={data[0]}>
            { data.map( (el, i) => i !== 1 ? 
                <El className='left-row' bgc={i} width='small' color={color} > <p> {el}% </p> </El> :
                <El text width='large' bgc={i} color={color} borderColor={color} > <p>{el}</p> </El>
            )}
        </Bar>
     );
}
 
export default BarElement;
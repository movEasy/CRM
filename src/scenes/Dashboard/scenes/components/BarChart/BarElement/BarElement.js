import React from 'react';
import styled from 'styled-components';

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
        font-size: ${ props => 
            ( props.text && '0.9rem' )
            || ( props.pct && '1rem' )
        };
    }
`;

const ElInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: hidden;

    p:nth-of-type(1) {
        border: none;
    }
`;

const DetailedParagraph = styled.div`
    height: ${ props => props.height && `${props.height}` }%;
    border-top: 0.01rem solid ${ props => props.borderColor };
    border-bottom: 0.01rem dotted ${ props => props.borderColor };
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BarElement = ({ data, color }) => {
    console.log(data);
    return ( 
        <Bar height={data.totalPct}>
            { Object.values(data).map( (el, i) => i !== 1 ? 
                <El pct className='left-row' bgc={i} width='small' color={color} > <p> {el}% </p> </El> :
                <El text width='large' bgc={i} color={color} borderColor={color} > <ElInner>{el.map((elInner) => <DetailedParagraph borderColor={color} height={elInner[0]}><p>{elInner[1]}</p></DetailedParagraph>)}</ElInner> </El>
            )}
        </Bar>
     );
}
 
export default BarElement;
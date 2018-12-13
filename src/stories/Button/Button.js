import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
    width: 10rem;
    height: 2rem;
    cursor: pointer;
    color: white;
    background-color: ${ props => 
    (props.bgc === 'Normal' && 'green')
    || (props.bgc === 'Call-to-action' && 'red')
    || (props.bgc === 'Submit' && 'Magenta')
    };
    border: none;
    border-radius: 0.5rem;
`;

const Button = ({ data: { text }}) => {
    return ( 
        <Btn bgc={text}> {text} </Btn>
     );
}
 
export default Button;
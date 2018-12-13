import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
    flex: 1 1 10rem;
`;

const ListItem = ({ data: { title }}) => {
    return ( 
        <Li>
            { title }
        </Li>
     );
}
 
export default ListItem;

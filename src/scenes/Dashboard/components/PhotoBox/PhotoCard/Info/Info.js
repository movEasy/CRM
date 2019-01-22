import React from 'react';

import { InfoWrapper } from './InfoStyles';

const Info = ({ data }) => {
    
    return ( 
        <InfoWrapper>
            <p>{data.name}</p>
            <p>{data.company}</p>
            <p>{data.position}</p>
            <p>{data.tel}</p>
            <p>{data.mail}</p>
        </InfoWrapper>
     );
}
 
export default Info;
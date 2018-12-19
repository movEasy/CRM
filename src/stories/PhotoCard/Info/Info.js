import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 50%;
    width: 100%;
    background-color: white;

    p:first-child {
        font-size: 1.2rem;
        padding-top: 0.7rem;
        color: #005EB8;
        font-weight: 600;
    }

    p:last-child {
        font-size: 0.9rem;
        color: #005EB8;
    }

    p {
        margin: 0;
        font-size: 1rem;
        padding: 0 0 0.2rem 0.9rem;
    }
`;

const Info = ({ data }) => {
    console.log(data);
    
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
import styled from 'styled-components';

export const ItemDetailsWrapper = styled.div`
display: flex;
max-width: 100%;
justify-content: space-between;
align-items: center;

padding-left: 1rem;
padding-right: 1rem;
flex: 1 0 auto;
max-height: 10%;

:hover {
    color: blueviolet;
}

p {
    margin: 0;
    font-size: 1.2rem;
}

svg {
    width: 1.2rem;
    height: 1.2rem;
    
    &.complete {
        color: green;
    }

    &.not-complete {
        color: red;
    }
}

`;

export const HoverInformation = styled.div`
position: absolute;
top: 30%;
left: 30%;
background-color: white;
border: 1px solid black;
width: 50rem;
height: 30rem;
z-index: 500;
display: flex;
flex-direction: column;
padding-left: 1rem;
padding-right: 1rem;

h2 {
    margin: 0;
    color: #0091DA;
}

div.detailedInformation {
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        p {
            margin: 0;
        }
    }
}

div.note {
    border: 1px solid black;
}
`;
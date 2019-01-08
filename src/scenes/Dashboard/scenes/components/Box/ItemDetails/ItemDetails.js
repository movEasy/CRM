import React, { Component } from 'react';
import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';

const ItemDetailsWrapper = styled.div`
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

const HoverInformation = styled.div`
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

class ItemDetails extends Component {
    state = { 
        isHovering: false,
    }

    handleMouseOver = (e) => {

        setTimeout(() => {
            this.setState({
                isHovering: true,
            })
        }, 200)
    }

    handleMouseOut = () => {
        this.setState({
            isHovering: false,
        });
    }

    render() { 
        const { id, item } = this.props.data;

        return (
            <>
            <ItemDetailsWrapper key={id} onMouseEnter={(key) => this.handleMouseOver(key)} onMouseLeave={this.handleMouseOut}>
                { item.map(el => el === 'notComplete' ? 
                    <MdCheckCircle className='not-complete'/> : el === 'complete' ? 
                    <MdCheckCircle className='complete' /> :  
                    <p>{el}</p>)
                }
            </ItemDetailsWrapper>
                {this.state.isHovering && 
                    <HoverInformation>
                        <h2>401646 M&PS Siemens Project 7P</h2>
                        <div className='detailedInformation'>
                            <div className='left-display'>
                                <p>Klient ID: 4030377</p>
                                <p>Sagstype: BC2200</p>
                                <p>Status: Åben</p>
                                <p>Sagsansvarlig partner: Jesper Arnø</p>
                                <p>Udførende jurist: Karina Johansen</p>
                            </div>
                            <div className='right-display'>
                                <p>Faktureret: 1.205.000 kr</p>
                                <p>Ufaktureret tid: 15.475 kr</p>
                                <p>Ufaktureret udlæg: 0 kr</p>
                                <p>Over/-underdækning: -353.929 kr</p>
                                <p>Åben saldo: -46.875 kr</p>
                            </div>
                        </div>
                        <div className='note'>
                            <p>Note: </p>
                        </div>
                    </HoverInformation>}
            </>
         );
    }
}
 
export default ItemDetails;

// const ItemDetails = ({ data:{ id, item} }) => {
//     return ( 
//         <ItemDetailsWrapper key={id} onMouteEnter>
//             { item.map(el => el === 'notComplete' ? <MdCheckCircle className='not-complete'/> : el === 'complete' ? <MdCheckCircle className='complete' /> :  <p>{el}</p>)}
//         </ItemDetailsWrapper>
//      );
// }
 
// export default ItemDetails;
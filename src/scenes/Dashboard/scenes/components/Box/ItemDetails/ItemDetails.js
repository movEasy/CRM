import React, { Component } from 'react';
import { MdCheckCircle } from 'react-icons/md';

import { 
    ItemDetailsWrapper,
    HoverInformation 
} from './ItemDetailsStyles';

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
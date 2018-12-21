import React, { Component } from 'react';
import styled from 'styled-components';

import Chart from './Chart/Chart';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35rem;
    width: 40rem;
`;

class BarChart extends Component {
    state = { 

     }
    render() { 
        const { ...cus_economy } = this.props.data;
        const { ...elementColor } = this.props.color;

        return ( 
            <Wrapper>
                { Object.values(cus_economy).map(el => <Chart data={el.exp} color={elementColor} />) }
                { Object.values(cus_economy).map(el => <Chart data={el.achived} color={elementColor} />) }
            </Wrapper>
         );
    }
}
 
export default BarChart;

// const Chart = styled.div`
//     display: flex;
//
//    <Wrapper>     flex-direction: column;
//     height: 100%;
//     width: 50%;
    
//     &:first-child {
//         margin-right: 1rem;
//     }

//     margin-top: 2rem;

//     :last-child {
//         margin-top: 0;
//     }
// `;

// const BarElement = styled.div`
//     background-color: ${ props => props.color };
//     border: ${ props => props.borderColor === '' ? `` : `1px solid ${props.borderColor}` };
//     height: ${ props => props.height && `${props.height}%` };
//     width: 100%;

//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//     p {
//         color: black;
//         margin: 0;
//     }
// `;

// const BarLine = styled.div`
//     height: ${ props => props.height && `${props.height}%` };
//     width: 100%;

//     div {
//         width: 100%;
//         border-bottom: 0.01rem solid  ${ props => props.color };
//         height: 2.07rem;
//     }

//     p {
//         position: relative;
//         top: 50%;
//         bottom: 0rem;
//         left: 1rem;
//         margin: 0;
//         font-size: 1rem;
//     }
// `;

// class BarChart extends Component {
//     state = {  }
//     render() {
//         return (
//             <Wrapper>
//                 <Chart>
//                     <BarElement height='20' color='#6D2077'>
//                         <p>17%</p>
//                     </BarElement>
//                     <BarElement height='30' color='#00A2A1' />
//                     <BarElement height='30' color='#460A68' />
//                     <BarElement height='20' color='#473698' />
//                 </Chart>
//                 <Chart>
//                     <BarElement height='20' borderColor='#6D2077' color='white'>
//                         <p>provision for coverage</p>
//                     </BarElement>
//                     <BarElement height='30' borderColor='#00A2A1' color='white' />
//                     <BarElement height='30' borderColor='#460A68' color='white' />
//                     <BarElement height='20' borderColor='#473698' color='white' />
//                 </Chart>
//                 <Chart>
//                     <BarLine height='20' color='#6D2077'>
//                         <div><p>Rev</p></div>
//                     </BarLine>
//                     <BarLine height='30' color='#00A2A1'>
//                         <div><p>Cost</p></div>
//                     </BarLine>
//                     <BarLine height='30' color='#460A68'>
//                         <div><p>Indirect cost</p></div>
//                     </BarLine>
//                     <BarLine height='20' color='#473698'>
//                         <div><p>Misc.</p></div>
//                     </BarLine>
//                 </Chart>
//             </Wrapper>
//          );
//     }
// }

// export default BarChart;
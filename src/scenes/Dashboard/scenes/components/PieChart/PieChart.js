import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styled from 'styled-components';

const data01 = [{name: 'CIT', value: 400}, {name: 'TP', value: 300}, {name: 'INDIRECT', value: 300}, {name: 'MPS', value: 200},]

const colors = ['#00A2A1', '#473698', '#00338D', '#6D2077'];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    h4 {
        margin: 0;
    }
`;

// const Legends = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     width: 100%;
//     min-height: 2rem;

//     div {
//         display: flex;
//         align-items: center;

//         p {
//         margin: 0;
//         font-size: 1rem;
//         padding-left: 0.5rem;
//     }
//     }
// `;

// const InnerCircle = styled.div`
//     width: 1rem;
//     height: 1rem;
//     color: black;
//     background-color: ${ props => 
//         (props.turquoise && '#00A2A1')
//         || (props.darkBlue && props.theme.darkBlue)
//         || (props.eggplant && props.theme.eggplant)
//         || (props.purple && props.theme.purple)
//     };
//     border-radius: 2rem;
// `;

class PC extends Component {
    state = { 

     }

    render() { 

        const { year } = this.props;
        return (
            <Wrapper>
            {/* <h4>{`Bruttoomsætning ${year}`}</h4> */}
                <PieChart width={200} height={200}>
                <text x={100} y={90} textAnchor="middle" dominantBaseline="middle">
                    {`${year}`}
                </text>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={80} innerRadius={60}>
                        {
                            data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))
                        }
                    </Pie>
                    <Pie dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip/>
                </PieChart>
            </Wrapper> 
        );
    }
}
 
export default PC;
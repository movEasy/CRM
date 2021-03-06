import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styled from 'styled-components';

const data01 = [{name: 'CIT', value: 400}, {name: 'TP', value: 300}, {name: 'INDIRECT', value: 300}, {name: 'MPS', value: 200},]

const colors = ['#00A2A1', '#473698', '#00338D', '#6D2077'];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 20rem;
`;
class PC extends Component {
    state = { 

     }

    render() { 
        console.log(window.innerWidth)
        return (
            <Wrapper>
            <h4>Bruttoomsætning 2017</h4>
                <PieChart width={500} height={250}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
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
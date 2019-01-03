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
class PC extends Component {
    state = { 

     }

    render() { 
        console.log(window.innerWidth)
        const { year } = this.props;
        return (
            <Wrapper>
            <h4>{`Bruttoomsætning ${year}`}</h4>
                <PieChart width={200} height={250}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
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
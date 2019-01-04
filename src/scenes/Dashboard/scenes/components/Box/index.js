import React, { Component } from 'react';
import styled from 'styled-components';

import Overview from './Overview/Overview';
import OverviewDetails from './OverviewDetails/OverviewDetails';

const WrapperMain = styled.div`
    width: 100%;
    max-height: 50%;
    min-width: 60rem;
    min-height: 20rem;
    border-radius: 0.4rem;
    overflow: hidden;

    background-color: white;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    border-radius: 0.4rem 0.4rem 0 0;

    padding-left: 1rem;
    padding-right: 1rem;

    color: black;

    h2 {
        font-size: 1rem;
    }

    h2:nth-child(2) {
        flex: 1;
    }

    h2:first-child {
        padding-left: 1rem;
        flex: 1;
    }

    h2:last-child {
        padding-right: 1rem;
        flex: 1;
    }
`;

const ButtonWrapper =styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
    height: 4rem;

    button {
        text-align: center;
        cursor: pointer;
        height: 3rem;
        width: 14rem;
        color: white;
        background-color: white;
        color: #0091DA;
        border: none;
        font-weight: 800;
    }
`;

const id2 = [
    ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
    ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
];

const id3 = [
    ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
    ['4016146', 'M&PS Siemens Project 7P', 'notComplete']
];

class Main extends Component {
    state = { 
        departmentSelected: false,
        id: ''
     }

    handleDepartmentSelect = (id) => {
        this.setState( prevState =>({
            departmentSelected: !prevState.departmentSelected,
            id
        }))
    }

    handleOverview = () => {
        this.setState({
            departmentSelected: false,
            id: ''
        })
    }

    render() { 
        // const { departments } = this.props.data;
        const { headers, bgc } = this.props;
        const { departmentSelected, id } = this.state;
        
        let dataDetails;

        switch ( id ) {
            case '1':
                dataDetails = this.props.data.department1.details;
                break;
            case '2': 
                dataDetails = id2;
                break;
            case '3':
                dataDetails = id3;
                break;
            default:
                dataDetails = ''
        }

        let box;

        if ( departmentSelected ) {
            box = (
                <WrapperMain>
                    <OverviewDetails data={ {details: dataDetails} } onItemSelect={(id) => this.handleDepartmentSelect(id)} returnIndex={this.handleOverview} />
                </WrapperMain>
            );
        } else {
            box =
            (
                <WrapperMain>
                    <Header>
                        {headers.map(el => <h2>{el}</h2>)}
                    </Header>
                    <Overview data={ this.props.data } styleHack={this.props.styleHack} onItemSelect={(id) => this.handleDepartmentSelect(id)} />
                    {this.props.styleHack === 'tasks' ? <ButtonWrapper>
                        <button>+ Create new task</button>
                    </ButtonWrapper> : ''}
                </WrapperMain>
            )
        }

        return ( 
            box
         );
    }
}
 
export default Main;
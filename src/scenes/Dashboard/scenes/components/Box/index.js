import React, { Component } from 'react';
import styled from 'styled-components';

import Overview from './Overview/Overview';
import OverviewDetails from './OverviewDetails/OverviewDetails';

const WrapperMain = styled.div`
    border: 1px solid black;
    width: 50rem;
    height: 20rem;
    border-radius: 0.4rem;
    overflow: hidden;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    background-color: #00A2A1;
    border-radius: 0.4rem 0.4rem 0 0;

    color: white;

    h2:first-child {
        padding-left: 1rem;
    }

    h2:last-child {
        padding-right: 1rem;
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
        console.log(id)
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
        const { departments } = this.props.data;
        const { departmentSelected, id } = this.state;

        let dataDetails;

        switch ( id ) {
            case '1':
                dataDetails = departments.department1.details;
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
                        <h2>Service line</h2>
                        <h2>Description</h2>
                        <h2>No. projects</h2>
                    </Header>
                    <Overview data={ { departments: departments} } onItemSelect={(id) => this.handleDepartmentSelect(id)} />
                </WrapperMain>
            )
        }

        return ( 
            box
         );
    }
}
 
export default Main;
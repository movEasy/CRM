import React, { Component } from 'react';
import styled from 'styled-components';

import Overview from './Overview/Overview';
import OverviewDetails from './OverviewDetails/OverviewDetails';

const WrapperMain = styled.div`
    /* width: 45rem;
    height: 23rem; */
    width: 100%;
    max-height: 50%;
    min-width: 35rem;
    min-height: 20rem;
    border-radius: 0.4rem;
    overflow: hidden;
    border: 0.06rem solid black;

    background-color: white;

    /* &:first-child {
        margin-bottom: 2rem;
    } */
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
        const { headers, bgc } = this.props;
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
                        {headers.map(el => <h2>{el}</h2>)}
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
import React, { Component } from 'react';

// Import components
import Index from './components/Box/index';
import PieChart from './components/PieChart/PieChart';
import NewBox from './components/NewBox/Index';

import {
  Container,
  ElementContainer,
  Dashboard,
  Legends,
  InnerCircle,
} from './MainStyles';

import { data } from '../services/dummyData';

// const data3 = {
//   cus_economy: {
//     exp: {
//       gross_rev: {
//         totalPct: '17',
//         details: [['100', 'Provision under coverage']],
//       },
//       rev: {
//         totalPct: '20',
//         details: [['50', 'Ufaktureret udlæg'], ['50', 'Not invoiced']],
//       },
//       realized_rev: {
//         totalPct: '60',
//         details: [
//           ['10', 'Underdækning'],
//           ['20', 'Open balance'],
//           ['10', 'Overdækning'],
//           ['60', 'Invoiced'],
//         ],
//       },
//       misc: {
//         totalPct: '3',
//         details: [['100', 'Nedskrivning på debitorer']],
//       },
//     },
//     achived: {
//       gross_rev: {
//         totalPct: '20',
//         details: [['100', 'Provision under coverage']],
//       },
//       rev: {
//         totalPct: '45',
//         details: [['10', 'Ufaktureret udlæg'], ['90', 'Not invoiced']],
//       },
//       realized_rev: {
//         totalPct: '30',
//         details: [
//           ['15', 'Underdækning'],
//           ['30', 'Open balance'],
//           ['15', 'Overdækning'],
//           ['40', 'Invoiced'],
//         ],
//       },
//       misc: {
//         totalPct: '7',
//         details: [['100', 'Nedskrivning på debitorer']],
//       },
//     },
//   },
// };

// const dataLines = [
//   ['20', 'Gross Revenue'],
//   ['45', 'Revenue'],
//   ['30', 'Realized Revenue'],
//   ['7', 'Misc.'],
// ];

// const color = {
//   elementColor: ['#F2D076', '#2E9AD8', '#67B77C', '#E6708A'],
// };

class Main extends Component {
  state = {
    itemSelect: false,
  };

  handleSelectItem = id => {
    if (id === 'XXX1') {
      this.setState({
        itemSelect: true,
      });
    } else {
      return;
    }
  };

  render() {
    let tasksData = data.tasks;
    return (
      <Container>
        <ElementContainer>
          <h3>Projects</h3>
          <NewBox />
          <h3>Tasks</h3>
          <Index
            data={tasksData}
            styleHack="tasks"
            bgc="eggplant"
            headers={['Deadline', 'Keyperson', 'Task']}
          />
        </ElementContainer>
        <ElementContainer>
          <Dashboard>
            <h2>360 DASHBOARD</h2>
            <Legends>
              <div>
                <InnerCircle turquoise />
                <p>CIT</p>
              </div>
              <div>
                <InnerCircle darkBlue />
                <p>TP</p>
              </div>
              <div>
                <InnerCircle eggplant />
                <p>INDIRECT</p>
              </div>
              <div>
                <InnerCircle purple />
                <p>MPS</p>
              </div>
            </Legends>
          </Dashboard>
          <PieChart year="2018" />
          <PieChart year="2017" />
        </ElementContainer>
      </Container>
    );
  }
}

export default Main;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Main from './index';

const data = {
    departments:  {
        department1:{
            id: '1', 
            infoItem: ['XXX1', 'Corporate Income Tax', '10'],
            details: [
                ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
                ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
                ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
                ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
                ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
            ]
        },
        department2:{
            id: '2', 
            infoItem: ['XXX2', 'Corporate Tax', '1']
        },
        department3:{
            id: '3', 
            infoItem: ['XXX3', 'Income Tax', '11']
        },
    }
}

const actions = {
    onItemSelect: action('onItemSelect'),
}

storiesOf('Box', module)
    .add('Index', () => <Main data={data} actions={actions} />);
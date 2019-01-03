import React from 'react';
import { storiesOf } from '@storybook/react';

import BarChart from './BarChart';

const data = {
    cus_economy: {
        exp: {
            gross_rev: {
                totalPct: '17',
                details: [
                    ['100', 'Provision for under coverage'],
                ]
            },
            rev: {
                totalPct: '20',
                details: [
                    ['50', 'Ufaktureret udlæg'],
                    ['50', 'Not invoiced'],
                ]
            },
            realized_rev: {
                totalPct: '60',
                details: [
                    ['10', 'Underdækning'],
                    ['20', 'Open balance'],
                    ['10', 'Overdækning'],
                    ['60', 'Invoiced'],
                ]
            },
            misc: {
                totalPct: '3',
                details: [
                    ['100', 'Nedskrivning på debitorer'],
                ]
            },
        },
        achived: {
            gross_rev: {
                totalPct: '20',
                details: [
                    ['100', 'Provision for under coverage'],
                ]
            },
            rev: {
                totalPct: '45',
                details: [
                    ['10', 'Ufaktureret udlæg'],
                    ['90', 'Not invoiced'],
                ]
            },
            realized_rev: {
                totalPct: '30',
                details: [
                    ['15', 'Underdækning'],
                    ['30', 'Open balance'],
                    ['15', 'Overdækning'],
                    ['40', 'Invoiced'],
                ]
            },
            misc: {
                totalPct: '7',
                details: [
                    ['100', 'Nedskrivning på debitorer'],
                ]
            },
        }
    }
}

const dataLines = [
    ['20', 'Gross Revenue'],
    ['45', 'Revenue'],
    ['30', 'Realized Revenue'],
    ['7', 'Misc.'],
];


const color = {
    elementColor: ['#473698', '#460A68', '#6D2077', '#00A2A1']
}

storiesOf('Charts', module)
    .add('Bar', () => <BarChart data={data} color={color} dataLines={dataLines} />);
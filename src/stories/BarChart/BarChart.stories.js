import React from 'react';
import { storiesOf } from '@storybook/react';

import BarChart from './BarChart';

const data = {
    cus_economy: {
        exp: {
            gross_rev: {
                totalPct: '17',
                details: [
                    ['50', 'Test 50%'],
                    ['30', 'Test 30%'],
                    ['20', 'Test 20%'],
                ]
            },
            rev: {
                totalPct: '20',
                details: [
                    ['50', 'Test 50%'],
                    ['30', 'Test 30%'],
                    ['20', 'Test 20%'],
                ]
            },
            realized_rev: {
                totalPct: '60',
                details: [
                    ['50', 'Test 50%'],
                    ['30', 'Test 30%'],
                    ['20', 'Test 20%'],
                ]
            },
            misc: {
                totalPct: '3',
                details: [
                    ['50', 'Test 50%'],
                    ['30', 'Test 30%'],
                    ['20', 'Test 20%'],
                ]
            },
        },
        achived: {
            gross_rev: ['20', ['Provision for under coverage', 'Provision for under coverage', 'Provision for under coverage']],
            rev: ['45', ['Provision for under coverage', 'Provision for under coverage', 'Provision for under coverage']],
            realized_rev: ['30', ['Provision for under coverage', 'Provision for under coverage', 'Provision for under coverage']],
            misc: ['7', ['Provision for under coverage', 'Provision for under coverage', 'Provision for under coverage']],
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
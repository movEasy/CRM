import React from 'react';
import { storiesOf } from '@storybook/react';

import BarChart from './BarChart';

const data = {
    cus_economy: {
        exp: {
            gross_rev: ['17', 'Provision for under coverage'],
            rev: ['20', 'Provision for under coverage'],
            realized_rev: ['60', 'Provision for under coverage'],
            misc: ['3', 'Provision for under coverage'],
        },
        achived: {
            gross_rev: ['20', 'Provision for under coverage'],
            rev: ['45', 'Provision for under coverage'],
            realized_rev: ['30', 'Provision for under coverage'],
            misc: ['7', 'Provision for under coverage'],
        }
    }
}

const color = {
    elementColor: ['#473698', '#460A68', '#6D2077', '#00A2A1']
}

storiesOf('Charts', module)
    .add('Bar', () => <BarChart data={data} color={color} />);
import React from 'react';
import { storiesOf } from '@storybook/react';

import Chart from './Chart';

const data = {
    exp: {
        gross_rev: ['17', 'Provision'],
        rev: ['20', 'Not invoiced'],
        realized_rev: ['60', 'Invoiced'],
        misc: ['3', 'Debitor'],
    }
}

const color = {
    elementColor: ['#473698', '#460A68', '#6D2077', '#00A2A1']
}

storiesOf('Charts', module)
    .add('Chart', () => <Chart data={data} color={color} />);
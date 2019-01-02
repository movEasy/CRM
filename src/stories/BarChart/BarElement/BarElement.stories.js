import React from 'react';
import { storiesOf } from '@storybook/react';

import BarElement from './BarElement';

// const data = ['17', ['Provision for under coverage', 'Provision for under coverage', 'Provision for under coverage']];

const data = {
    totalPct: '17',
    details: [
        ['50', 'Test 50%'],
        ['30', 'Test 30%'],
        ['20', 'Test 20%'],
    ]
}

const elementColor = '#473698'

storiesOf('Charts', module)
    .add('BarElement', () => <BarElement data={data} color={elementColor} />);
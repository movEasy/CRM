import React from 'react';
import { storiesOf } from '@storybook/react';

import BarElement from './BarElement';

const data = ['17', 'Provision for under coverage'];

const elementColor = '#473698'

storiesOf('Charts', module)
    .add('BarElement', () => <BarElement data={data} color={elementColor} />);
import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemDetails from './ItemDetails';

const data = {
    id: '1',
    item: ['4016145', 'M&PS Siemens Project 7P', 'notomplete']
} 



storiesOf('Box', module)
    .add('Item - details', () => <ItemDetails data={data} />);
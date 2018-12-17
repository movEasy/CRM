import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Overview from './Overview';

const data = {
    departments: {
        department1:{
            id: '1', 
            infoItem: ['XXX1', 'Corporate Income Tax', '10']
        },
        department2:{
            id: '2', 
            infoItem: ['XXX2', 'Corporate Income Tax', '10']
        },
        department3:{
            id: '3', 
            infoItem: ['XXX3', 'Corporate Income Tax', '10']
        },

    }
}

const actions = {
    onItemSelect: action('onItemSelect'),
}

storiesOf('Box', module)
    .add('Overview', () => <Overview data={data} {...actions} />);
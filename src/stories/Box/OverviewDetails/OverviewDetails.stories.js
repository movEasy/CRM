import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import OverviewDetails from './OverviewDetails';

const data = {
    details: [
        ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
        ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
        ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
        ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
        ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
        ['4016146', 'M&PS Siemens Project 7P', 'notComplete']
    ]
}


storiesOf('Box', module)
    .add('Overview - details', () => <OverviewDetails data={data} />);
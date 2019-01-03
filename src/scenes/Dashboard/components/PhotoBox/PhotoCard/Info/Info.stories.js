import React from 'react';
import { storiesOf } from '@storybook/react';

import Info from './Info'

export const data = {
    name: 'Jesper Arnø',
    company: 'KPMG Acor Tax',
    position: 'Partner',
    tel: '+45 12 34 56 78',
    mail: 'jesper.arno@kpmg.com'
}

storiesOf('Contact', module)
    .add('Info', () => <Info data={data} />);
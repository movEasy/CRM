import React from 'react';
import { storiesOf } from '@storybook/react';

import PhotoBox from './PhotoBox'

export const data = {
    person1: {
        name: 'Jesper Arnø1',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person2: {
        name: 'Jesper Arnø2',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person3: {
        name: 'Jesper Arnø3',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person4: {
        name: 'Jesper Arnø4',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    }
}

storiesOf('Photo Box', module)
    .add('index', () => <PhotoBox data={data} />);
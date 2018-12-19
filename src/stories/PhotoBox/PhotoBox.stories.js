import React from 'react';
import { storiesOf } from '@storybook/react';

import PhotoBox from './PhotoBox'

export const data = {
    person1: {
        name: 'arnø 1',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person2: {
        name: 'arnø 2',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person3: {
        name: 'arnø 3',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person4: {
        name: 'arnø 4',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person5: {
        name: 'arnø 5',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person6: {
        name: 'arnø 6',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person7: {
        name: 'Arnø7',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person8: {
        name: 'Arnø 8',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    }
}

storiesOf('Photo Box', module)
    .add('index', () => <PhotoBox data={data} />);
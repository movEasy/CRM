import React from 'react';
import { storiesOf } from '@storybook/react';

import PhotoBox from './PhotoBox'

export const data = {
    person1: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person2: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person3: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person4: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person5: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person6: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person7: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    },
    person8: {
        name: 'Jesper Arnø',
        company: 'KPMG Acor Tax',
        position: 'Partner',
        tel: '+45 12 34 56 78',
        mail: 'jesper.arno@kpmg.com'
    }
}

storiesOf('Photo Box', module)
    .add('index', () => <PhotoBox data={data} />);
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

export const text1 = {
    text: 'Normal'
}

export const text2 = {
    text: 'Call-to-action'
}
export const text3 = {
    text: 'Submit'
}

storiesOf('Button', module)
    .add('default', () => <Button data={text1} />)
    .add('CTA', () => <Button data={text2} />)
    .add('Submit', () => <Button data={text3} />)
    ;
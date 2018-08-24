import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';

storiesOf('Button 按钮', module)
  .add('按钮', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
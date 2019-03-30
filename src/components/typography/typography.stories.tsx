import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title, Subtitle } from './index';

storiesOf('Typography', module)
  .add('Title', () => (
    <Title>Title</Title>
  ))
  .add('Capitalized Title', () => (
    <Title upperCase>Title</Title>
  ))
  .add('Subtitle', () => (
    <Subtitle>Subtitle</Subtitle>
  ))
  .add('Capitalized Subtitle', () => (
    <Subtitle upperCase>Subtitle</Subtitle>
  ));
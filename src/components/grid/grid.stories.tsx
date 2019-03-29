import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Column } from './index';

const containerStyle: CSSProperties = {
    backgroundColor: '#F6D55C',
    height: '500px',
    color: '#fff',
    textTransform: 'uppercase'
};

const rowStyle: CSSProperties = {
    backgroundColor: '#173F5F'
};

const colStyle: CSSProperties = {
    backgroundColor: '#20639B'
};

storiesOf('Grid System', module)
  .add('Simple Grid', () => (
    <div style={containerStyle}>
        <Row style={rowStyle}>
            <Column style={colStyle}>Col 1</Column>
            <Column style={colStyle}>Col 2</Column>
            <Column style={colStyle}>Col 3</Column>
        </Row>
    </div>
  ))
  .add('Covered Grid', () => (
    <div style={containerStyle}>
        <Row style={rowStyle} cover>
            <Column style={colStyle}>Col 1</Column>
            <Column style={colStyle}>Col 2</Column>
            <Column style={colStyle}>Col 3</Column>
        </Row>
    </div>
  ))
  .add('Guttered Grid', () => (
    <div style={containerStyle}>
        <Row style={rowStyle} gutter={15}>
            <Column style={colStyle}><div>Col 1</div></Column>
            <Column style={colStyle}>Col 2</Column>
            <Column style={colStyle}>Col 3</Column>
        </Row>
    </div>
  ))
  .add('Different Column Size', () => (
    <div style={containerStyle}>
        <Row style={rowStyle} gutter={15} cover>
            <Column style={colStyle} grow={2}><div>Col 1</div></Column>
            <Column style={colStyle}>Col 2</Column>
            <Column style={colStyle}>Col 3</Column>
        </Row>
    </div>
  ))
  .add('Vertical Grid', () => (
    <div style={containerStyle}>
        <Row style={rowStyle} gutter={15} vertical cover>
            <Column style={colStyle} grow={2}><div>Col 1</div></Column>
            <Column style={colStyle}>Col 2</Column>
            <Column style={colStyle}>Col 3</Column>
        </Row>
    </div>
  ))
  .add('Justify Content', () => (
    <div style={containerStyle}>
        <Row style={rowStyle} gutter={15} vertical cover>
            <Column style={colStyle}>Col 1</Column>
            <Column style={colStyle} justify='center'>Col 2</Column>
            <Column style={colStyle} justify='right'>Col 3</Column>
        </Row>
    </div>
  ));
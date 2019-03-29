import styled, { css } from 'styled-components';

export interface RowProps {
    readonly vertical?: boolean;
    readonly cover?: boolean;
    readonly gutter?: number;
}

export interface ColumnProps {
    readonly grow?: number;
    readonly justify?: string;
}

export const Row = styled('div') <RowProps>`
    display: flex;
    align-items: stretch;
    flex-direction: ${(props) => props.vertical ? 'column' : 'row'};
    ${(props) => props.cover && css`
        height: 100%;
    `}
    ${(props) => props.gutter && css`
        & > div {
            margin: ${props.gutter}px;
        }
    `}
`;

export const Column = styled('div') <ColumnProps>`
    text-align: ${(props) => props.justify};
    flex: ${(props) => props.grow || 1};
`;
import styled, { css } from 'styled-components';

export interface TypographyProps {
    readonly upperCase?: boolean;
}

export const Title = styled('h1') <TypographyProps>`
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;

export const Subtitle = styled('h3') <TypographyProps>`
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;
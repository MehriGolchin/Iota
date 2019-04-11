import styled from 'styled-components';
import { darken } from 'polished'

export interface ButtonProps {
    readonly primary?: boolean;
}

export const Button = styled('button')<ButtonProps>`
    color: ${(props) => props.theme.revertFontColor}; 
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    background-color: ${({ primary, theme }) => primary ? theme.primary : theme.secondary};  
    &:hover {        
        background-color: ${({ primary, theme }) => darken(0.15, primary ? theme.primary : theme.secondary)};
      } 
    &:focus { 
        outline: none; 
    } 
`;

import styled, { css } from 'styled-components';
import { palette } from 'assets/variables';
import { IButtonModifiers } from './interfaces';
import { rgba } from 'polished';

const small = css`
    padding: 0.4rem 2rem;
`;

const disabled = css`
    cursor: default;
    transition: 0.2s transform;
    color: ${rgba(palette.secondary, 0.5)};
    background: ${palette.disabled};
    transform: none;

    &:hover,
    &:active {
        background: ${palette.disabled};
        transform: none;
    }
`;

export const StyledButton = styled.button<IButtonModifiers>`
    background: ${palette.primary};
    color: ${palette.foreground};
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    flex: 1;

    padding: 0.8rem 2rem;
    transition: 0.2s background, 0.2s transform;

    margin: 0.3rem 0;

    &:hover {
        transform: translateY(-0.1rem);
    }

    &:active {
        transition: 0.2s transform;
        background: ${palette.secondary};
        transform: translateY(0rem);
    }

    ${(props) => !!props.small && small}
    ${(props) => !!props.disabled && disabled}
`;

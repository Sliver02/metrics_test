import styled, { css } from 'styled-components';
import { palette, zIndex } from 'assets/variables';
import { ITooltipModifiers } from './interfaces';
import { StyledIcon } from 'assets/globalStyles';

export const Dialog = styled.div``;
export const IconContainer = styled.div``;

const small = css`
    font-size: 0.8rem;

    ${IconContainer} {
        margin-right: 0.3rem;

        ${StyledIcon} {
            width: 1rem;
        }
    }
`;

const disabled = css`
    pointer-events: none;
    color: ${palette.secondary};
`;

export const StyledTooltip = styled.div<ITooltipModifiers>`
    display: flex;
    margin: 0.2rem 0;

    ${IconContainer} {
        position: relative;
        margin-right: 0.5rem;

        &:hover {
            ${Dialog} {
                opacity: 1;
                visibility: visible;
            }
        }

        ${StyledIcon} {
            cursor: pointer;
            width: 1.5rem;
        }

        ${Dialog} {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            max-width: 15rem;
            min-width: 10rem;
            padding: 0.5rem;

            z-index: ${zIndex.tooltip};
            left: 120%;
            top: 0;

            font-size: 0.8rem;
            color: ${palette.foreground};

            background: ${palette.secondary};
            border-radius: 0.2rem;

            pointer-events: none;
            transition: 0s 0.2s display, 0.3s opacity;
        }
    }

    ${(props) => !!props.small && small}
    ${(props) => !!props.disabled && disabled}
`;

import styled, { css } from 'styled-components';
import { palette } from 'assets/variables';
import { IInputModifiers } from './interfaces';
import { StyledIcon } from 'assets/globalStyles';
import { rgba } from 'polished';

const selected = css`
    color: ${palette.primary};
    border: 1px solid ${palette.primary};

    & + label {
        transform: translateY(-0.8rem);
        font-size: 0.8rem;
    }
`;

export const InputContainer = styled.div``;
export const Descrtiption = styled.div``;

export const StyledInput = styled.div<IInputModifiers>`
    margin: 0.5rem 0;
    width: 100%;
    color: ${palette.secondary};

    ${InputContainer} {
        position: relative;
        display: flex;
        align-items: center;

        input {
            color: ${palette.secondary};
            outline: 2px solid transparent;
            background: transparent;

            padding: 1.4rem 1rem 0.6rem;
            border: 1px solid ${rgba(palette.secondary, 0.6)};
            width: 100%;

            transition: 0.2s border;

            &:focus-visible,
            &:focus {
                ${selected}
            }

            ${(props) => !!props.hasValue && selected}
        }

        label {
            position: absolute;
            left: 1rem;
            pointer-events: none;

            transition: 0.2s transform, 0.2s font-size;
        }
    }

    ${Descrtiption} {
        margin-top: 0.2rem;
    }
`;

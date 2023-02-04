import styled, { css } from 'styled-components';
import { palette } from 'assets/variables';
import { ICheckboxModifiers } from './interfaces';
import { StyledIcon } from 'assets/globalStyles';
import { rgba } from 'polished';

export const FakeInput = styled.div``;

const checked = css`
    ${FakeInput} {
        background: ${palette.success};
        color: ${palette.foreground};
        border: 1px solid ${palette.success};
    }
`;

const disabled = css`
    cursor: default;
    color: ${palette.secondary};
    pointer-events: none;

    ${FakeInput} {
        border: 1px solid ${palette.secondary};
    }
`;

export const StyledCheckbox = styled.div<ICheckboxModifiers>`
    cursor: pointer;
    display: flex;
    -ms-user-select: none;
    user-select: none;

    margin: 0.2rem 0;

    input {
        display: none;
    }

    ${FakeInput} {
        position: relative;
        width: 1.2rem;
        height: 1.2rem;

        transform: translateY(0.08rem);
        margin-right: 0.5rem;

        border: 1px solid ${palette.primary};

        transition: 0.2s scale, 0.2s border, 0.2s background;

        ${StyledIcon} {
            position: absolute;
            width: 100%;
        }
    }

    ${(props) => !!props.checked && checked}
    ${(props) => !!props.disabled && disabled}
`;

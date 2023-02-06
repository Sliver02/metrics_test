import { StyledIcon } from 'assets/globalStyles';
import media from 'assets/mediaQueries';
import { palette } from 'assets/variables';
import { StyledButton } from 'components/atoms/Button/styled';
import { StyledCheckbox } from 'components/atoms/CheckBox/styled';
import styled, { css } from 'styled-components';

export const Header = styled.div``;
export const Content = styled.div``;

export const Row = styled.div``;
export const ButtonWrapper = styled.div``;
export const TitleWrapper = styled.div``;

export const NavBar = styled.div``;
export const Nav = styled.div``;
export const Pagination = styled.div``;
export const Records = styled.div``;

export const StyledTable = styled.div`
    ${NavBar} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        ${media.min.md`
            flex-direction: row;
        `}

        ${Nav} {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;

            ${media.min.md`
                justify-content: flex-end;
            `}

            ${Pagination}, ${Records} {
                display: flex;
                align-items: center;

                ${StyledIcon} {
                    cursor: pointer;
                    transition: 0.2s transform;

                    &:hover {
                        transform: scale(1.2);
                    }

                    &:active {
                        transform: scale(1);
                    }
                }
            }

            ${Pagination} {
                margin-left: 1rem;

                ${StyledIcon} {
                    width: 1.5rem;
                }
            }

            ${Records} {
                ${StyledIcon} {
                    width: 1.8rem;
                }
            }
        }
    }

    ${Content} {
        background: ${palette.foreground};
        padding: 2rem 0;
        border-radius: 1rem;
        min-height: 30rem;

        ${Row} {
            width: 100%;
            padding: 1rem 2rem;
            border-bottom: 1px solid ${palette.background};
            display: flex;
            justify-content: space-between;

            &:last-of-type {
                border: none;
            }

            ${TitleWrapper} {
                display: flex;
                align-items: center;
            }

            ${ButtonWrapper} {
                ${StyledButton} + ${StyledButton} {
                    margin-left: 1rem;
                }

                ${StyledCheckbox} {
                    margin-left: 1rem;
                }
            }
        }
    }
`;

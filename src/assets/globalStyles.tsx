import styled, { createGlobalStyle } from 'styled-components';
import media from './mediaQueries';
import { fontSize, palette } from './variables';
import Icon from '@mdi/react';

export const GlobalStyles = createGlobalStyle`
    // global reset
    *,
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    // base global style
    html, 
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu','Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-display: swap;
        scroll-behavior: smooth;
        height: -webkit-fill-available;

        background-color: ${palette.background};
        color: ${palette.primary};

        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        line-height: 1.2;

        font-size: 16px;

        ${media.min.xxl`
            font-size: ${fontSize.xl}vw;
        `}
    }

    main {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        padding: 0 0 2rem;
    }

    a {
        width: fit-content;
        color: ${palette.secondary};
        font-weight: 500;
        text-decoration: none;
        transition: 0.2s transform;
        display: inline-block;

        &:hover {
            transform: translateY(-0.1rem);
        }

        &:active {
            transform: translateY(0rem);
        }
    }

    strong {
        font-weight: 500;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    margin: 2rem 0;
    padding: 2rem;
    border: 1px dashed ${palette.primary};
    background: ${palette.foreground};
`;

const getFontSize = (type: string) => {
    switch (type) {
        case 'small':
            return 1.8;
        case 'medium':
            return 2;
        case 'large':
            return 3;
        default:
            return 3;
    }
};

export const Title = styled.h1<{ type: string }>`
    font-size: ${(props) => getFontSize(props.type)}rem;
    line-height: 0.8;
    margin-bottom: ${(props) => getFontSize(props.type) / 2}rem;
`;

export const StyledIcon = styled(Icon)``;

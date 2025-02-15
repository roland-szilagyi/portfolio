/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    text-decoration: none;
  }

  body {
    font-size: 15px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    scroll-behavior: smooth;
    overflow-x: hidden;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    text-align: center;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-weight: 100;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
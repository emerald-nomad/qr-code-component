"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        // Colors
        --color-white: hsl(0, 0%, 100%);
        --color-light-gray:  hsl(212, 45%, 89%);
        --color-grayish-blue:  hsl(220, 15%, 55%);
        --color-dark-blue: hsl(218, 44%, 22%);

        // Viewports
        --viewport-mobile: 375px;
        --viewport-desktop: 1440px;

        // Font
        font-family: var(--font-outfit);
        font-size: 16px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, 
    body {
        height: 100%;
    }

    body {
        background-color: var(--color-light-gray);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 15px;
    }
`;

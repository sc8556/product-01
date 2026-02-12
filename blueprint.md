
# Lotto Number Generator

## Overview

A simple, visually appealing web application that allows users to generate random lottery numbers. The application will be built using modern HTML, CSS, and JavaScript, following the principles of Web Components for a modular and maintainable structure. It includes pink, dark, and light themes.

## Design and Features

### Visual Design

*   **Theme:** A clean, modern, and bold design with a visually balanced layout. Includes user-switchable pink, dark, and light modes.
*   **Color Palette:** A playful pink palette, a cool, subdued palette for the dark theme, and a vibrant and energetic color palette for the light theme.
*   **Typography:** Expressive and clear typography will be used to create a visual hierarchy.
*   **Iconography:** Icons will be used to enhance the user's understanding of the application's functionality.
*   **Interactivity:** Interactive elements have a "glow" effect and subtle animations to provide visual feedback. A theme toggle button is available.
*   **Effects:** Generated numbers appear with a "reveal" animation.
*   **Texture:** A subtle noise texture will be applied to the background to add a premium feel.
*   **Layout:** The layout will be responsive and adapt to different screen sizes.

### Features

*   **Number Generation:** Users can generate a set of 6 unique random numbers between 1 and 45 by clicking a button.
*   **Number Display:** The generated numbers are displayed with a reveal animation.
*   **Web Component:** The lottery number generator is encapsulated as a Web Component for reusability.
*   **Theme Toggle:** Users can cycle through pink, dark, and light themes.

## Current Plan

1.  **Fix Rendering Bug:** Correct the JavaScript code to ensure the lotto generator component is always visible.
2.  **Update `blueprint.md`:** Reflect the new theme order (pink, dark, light).
3.  **Update `style.css`:**
    *   Add component-specific background color variables for each theme.
    *   Ensure `data-theme` attributes correctly apply all theme styles.
4.  **Update `main.js`:**
    *   Implement the theme-cycling logic in the new order (pink, dark, light).
    *   Simplify the `LottoGenerator` component to correctly use CSS variables, removing the buggy update logic.

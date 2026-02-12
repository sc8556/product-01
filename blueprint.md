
# Lotto Number Generator

## Overview

A simple, visually appealing web application that allows users to generate random lottery numbers. The application will be built using modern HTML, CSS, and JavaScript, following the principles of Web Components for a modular and maintainable structure. It includes both a light and a dark theme.

## Design and Features

### Visual Design

*   **Theme:** A clean, modern, and bold design with a visually balanced layout. Includes a user-switchable light and dark mode.
*   **Color Palette:** A vibrant and energetic color palette for the light theme, and a cool, subdued palette for the dark theme.
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
*   **Theme Toggle:** Users can switch between a light and a dark theme.

## Current Plan

1.  **Update `blueprint.md`:** Reflect the addition of dark/light modes and visual effects.
2.  **Update `index.html`:** Add a theme toggle button.
3.  **Update `style.css`:**
    *   Define CSS variables for both light and dark themes.
    *   Style the theme toggle button.
    *   Add transitions for a smooth theme change.
4.  **Update `main.js`:**
    *   Implement the theme-switching logic.
    *   Add a "reveal" animation to the lottery numbers when they are generated.

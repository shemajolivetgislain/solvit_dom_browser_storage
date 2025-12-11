# solvit_dom_browser_storage

## Overview

This project is a simple web application that demonstrates how to use the DOM and browser localStorage to manage student data and theme preferences.

## Features

- **Student Form**: Enter your name, age, and tech stack. Submitting the form previews the data below.
- **Preview**: After submitting, your input is shown in a preview section.
- **Save to Local Storage**: After previewing, you can save the student data to localStorage. All saved students are displayed in a list below.
- **Theme Switcher**: Toggle between light and dark themes using the "Change Theme" button or by pressing the "f" key on your keyboard. The selected theme is saved in localStorage and persists across page reloads.

## How it Works

1. **Form Submission**: Fill in the form and click "Preview". The data is shown in the preview area, and the "Save to Local Storage" button appears.
2. **Saving Data**: Click "Save to Local Storage" to store the student data. All saved students are listed under "Data From LocalStorage".
3. **Theme Switching**: Use the button or press "f" to toggle the theme. The choice is saved and restored on reload.

## Files

- `index.html`: Contains the HTML structure for the form, preview, theme button, and student list.
- `form.js`: Handles form submission, preview, saving to localStorage, displaying students, and theme switching logic.

## Usage

1. Open `index.html` in your browser.
2. Fill out the form and preview your data.
3. Save to localStorage and see the list update.
4. Change the theme as desired.

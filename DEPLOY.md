# Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages.

## Prerequisites

- You need a GitHub account.
- You need `git` installed on your machine.

## Steps

1.  **Initialize Git (if not already done)**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Repository on GitHub**
    - Go to [GitHub.com](https://github.com) and create a new repository (e.g., `my-portfolio`).
    - Do **not** initialize with README, .gitignore, or License (you already have them).

3.  **Link Local Repo to GitHub**
    ```bash
    git remote add origin https://github.com/dibyasn/portfolio.git
    git branch -M main
    git push -u origin main
    ```

4.  **Deploy**
    Run the following command in your terminal:
    ```bash
    npm run deploy
    ```

    This script will:
    - Build your project (create the `dist` folder).
    - Push the `dist` folder to a `gh-pages` branch on your repository.

5.  **Enable GitHub Pages**
    - Go to your repository settings on GitHub.
    - Go to **Pages**.
    - Ensure the source is set to `Deploy from a branch`.
    - Select the `gh-pages` branch (it should be automatically selected).
    - Your site will be live at `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`.

## Troubleshooting

- If you see a blank page, ensure `vite.config.js` has `base: './'` (it is already set).
- If images are missing, make sure they are in the `public` folder and referenced correctly.

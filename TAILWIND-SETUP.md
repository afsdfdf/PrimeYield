# Tailwind CSS Setup Guide

This guide will help you resolve CSS linting issues with Tailwind CSS in VS Code.

## Quick Fix

Run the setup script to automatically configure your environment:

```bash
node setup-tailwind.js
```

## Manual Setup

If you prefer to set things up manually, follow these steps:

### 1. Install Required Extensions

Install these VS Code extensions:

- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- PostCSS Language Support (csstools.postcss)
- Prettier - Code formatter (esbenp.prettier-vscode)
- ESLint (dbaeumer.vscode-eslint)

### 2. Configure VS Code Settings

Create or update `.vscode/settings.json` with:

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "tailwindCSS.emmetCompletions": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "files.associations": {
    "*.css": "postcss"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 3. Install Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 4. Create or Update PostCSS Config

Make sure your `postcss.config.mjs` contains:

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
```

### 5. Reload VS Code

After making these changes, reload your VS Code window:

- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "Reload Window" and press Enter

## Why This Works

- Disabling CSS validation prevents errors for Tailwind directives
- Associating CSS files with PostCSS enables proper syntax highlighting
- Installing the recommended extensions provides proper language support

## Still Seeing Errors?

If you're still seeing errors:

1. Make sure you've reloaded VS Code
2. Check that all extensions are properly installed
3. Verify that your Tailwind CSS configuration is correct
4. Try restarting your development server

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [VS Code Tailwind CSS Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Documentation](https://postcss.org/)

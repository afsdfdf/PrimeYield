// Setup script for Tailwind CSS
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Setting up Tailwind CSS and related tools...')

try {
  // Install dependencies
  console.log('Installing dependencies...')
  execSync('npm install -D tailwindcss@latest postcss@latest autoprefixer@latest', {
    stdio: 'inherit',
  })

  // Create Tailwind config if it doesn't exist
  const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js')
  if (!fs.existsSync(tailwindConfigPath)) {
    console.log('Creating Tailwind config...')
    execSync('npx tailwindcss init -p', { stdio: 'inherit' })
  }

  // Create VS Code settings directory if it doesn't exist
  const vscodeDir = path.join(process.cwd(), '.vscode')
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir)
  }

  // Create settings.json
  const settingsPath = path.join(vscodeDir, 'settings.json')
  const settings = {
    'css.validate': false,
    'less.validate': false,
    'scss.validate': false,
    'tailwindCSS.emmetCompletions': true,
    'editor.quickSuggestions': {
      strings: true,
    },
    'files.associations': {
      '*.css': 'postcss',
    },
    'editor.formatOnSave': true,
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
    },
  }

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2))
  console.log('Created VS Code settings')

  // Create extensions.json
  const extensionsPath = path.join(vscodeDir, 'extensions.json')
  const extensions = {
    recommendations: [
      'bradlc.vscode-tailwindcss',
      'csstools.postcss',
      'esbenp.prettier-vscode',
      'dbaeumer.vscode-eslint',
    ],
  }

  fs.writeFileSync(extensionsPath, JSON.stringify(extensions, null, 2))
  console.log('Created VS Code extensions recommendations')

  console.log('\nSetup complete! Please:')
  console.log('1. Install the recommended VS Code extensions')
  console.log('2. Reload your VS Code window')
  console.log("3. Restart your development server if it's running")
} catch (error) {
  console.error('Error during setup:', error)
  process.exit(1)
}

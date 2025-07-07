// This script installs necessary packages for Tailwind CSS support
const { execSync } = require('child_process');

console.log('Installing packages for Tailwind CSS support...');

try {
  // Install Tailwind CSS and related packages
  execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });
  
  // Install VS Code extension for Tailwind CSS (if not already installed)
  console.log('Please install the following VS Code extensions manually:');
  console.log('- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)');
  console.log('- PostCSS Language Support (csstools.postcss)');
  
  console.log('\nSetup complete! Please reload your VS Code window.');
} catch (error) {
  console.error('Error installing packages:', error);
  process.exit(1);
} 
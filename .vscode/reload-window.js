// This is a simple script to help reload the VS Code window
// To use it:
// 1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
// 2. Type "Developer: Open Webview Developer Tools"
// 3. In the console, paste the following:
//    fetch('http://localhost:3000/reload-window').then(() => console.log('Window reload requested'))

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/reload-window') {
    console.log('Reload window request received');
    
    // Send a response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Window reload requested');
    
    // You can't actually reload the window from here,
    // this is just a helper script to remind you how to do it manually
    console.log('\n=== HOW TO RELOAD VS CODE WINDOW ===');
    console.log('1. Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)');
    console.log('2. Type "Reload Window" and press Enter');
    console.log('===============================\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const PORT = 3456;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('To reload VS Code window:');
  console.log('1. Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)');
  console.log('2. Type "Reload Window" and press Enter');
}); 
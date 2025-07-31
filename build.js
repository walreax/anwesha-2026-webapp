const { execSync } = require('child_process');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');
console.log('Building with Vite...');

try {
  execSync(`"${vitePath}" build`, { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

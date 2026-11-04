const fs = require('fs');
const html = fs.readFileSync('C:/Users/janko/Desktop/tdx/index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    new Function(scriptMatch[1]);
    console.log('JS syntax valid!');
  } catch (err) {
    console.error('JS Syntax error:', err);
  }
} else {
  console.log('No script tag found');
}

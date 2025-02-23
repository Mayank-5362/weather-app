const fs = require('fs');
const path = require('path');

// Path to the generated index.html
const indexPath = path.resolve('dist', 'index.html');

// Read the index.html file
let htmlContent = fs.readFileSync(indexPath, 'utf-8');

// Add the base tag just before the closing </head> tag
htmlContent = htmlContent.replace(
  /<\/head>/,
  '<base href="/weather-app/">\n</head>'
);

// Write the changes back to the index.html file
fs.writeFileSync(indexPath, htmlContent);

console.log('Base tag added to index.html!');

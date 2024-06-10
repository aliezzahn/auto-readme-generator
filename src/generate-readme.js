// generate-readme.js

const fs = require('fs');
const path = require('path');

// Function to extract metadata from package.json
function extractMetadata() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = require(packageJsonPath);
  return {
    name: packageJson.name,
    description: packageJson.description,
    version: packageJson.version,
    author: packageJson.author,
    license: packageJson.license,
    // Add more fields as needed
  };
}

// Function to parse JavaScript files for comments
function parseComments(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const commentsRegex = /\/\/(.*)|\/\*([\s\S]*?)\*\//g;
  const comments = [];
  let match;
  while ((match = commentsRegex.exec(fileContent)) !== null) {
    comments.push(match[0].trim());
  }
  return comments;
}

// Function to generate README content
function generateReadme(metadata, comments) {
    let readmeContent = `# ${metadata.name}\n\n`;
    readmeContent += `## Description\n${metadata.description || 'No description provided.'}\n\n`;
    readmeContent += `## Installation\n`;
    // Add installation instructions
    readmeContent += `## Usage\n`;
    // Add usage instructions
    readmeContent += `## License\n${metadata.license || 'No license provided.'}\n\n`;
    readmeContent += `## Author\n${metadata.author || 'No author provided.'}\n\n`;
    
    if (comments.length > 0) {
      readmeContent += `## Code Comments\n\n`;
      comments.forEach((comment, index) => {
        readmeContent += `${index + 1}. ${comment}\n`;
      });
    } else {
      readmeContent += `## Code Comments\n\nNo code comments found.`;
    }
    
    return readmeContent;
  }

module.exports = {
  extractMetadata,
  parseComments,
  generateReadme,
};

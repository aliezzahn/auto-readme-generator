// generate-readme.test.js

const fs = require('fs');
const path = require('path');
const { extractMetadata, parseComments, generateReadme } = require('../generate-readme');

describe('generate-readme', () => {
  test('extractMetadata should return correct metadata', () => {
    const metadata = extractMetadata();
    expect(metadata).toHaveProperty('name');
    expect(metadata).toHaveProperty('description');
    expect(metadata).toHaveProperty('version');
    // Add more assertions as needed
  });

  test('parseComments should return array of comments', () => {
    const filePath = path.join(__dirname, 'testfile.js');
    const comments = parseComments(filePath);
    expect(Array.isArray(comments)).toBe(true);
    // Add more assertions as needed
  });

  test('generateReadme should return correct README content', () => {
    const metadata = {
      name: 'test-package',
      description: 'Test package for auto-readme-generator',
      version: '1.0.0',
      author: 'Test Author',
      license: 'MIT',
    };
    const comments = ['// Test comment 1', '// Test comment 2'];
    const readmeContent = generateReadme(metadata, comments);
    expect(readmeContent).toContain('# test-package');
    expect(readmeContent).toContain('## Description\nTest package for auto-readme-generator');
    // Add more assertions as needed
  });

  test('generateReadme should handle empty comments array', () => {
    const metadata = {
      name: 'test-package',
      description: 'Test package for auto-readme-generator',
      version: '1.0.0',
      author: 'Test Author',
      license: 'MIT',
    };
    const comments = [];
    const readmeContent = generateReadme(metadata, comments);
    expect(readmeContent).toContain('# test-package');
    expect(readmeContent).toContain('## Description\nTest package for auto-readme-generator');
    expect(readmeContent).toContain('## Code Comments\n\nNo code comments found.');
    // Add more assertions as needed
  });

  test('generateReadme should handle missing metadata fields', () => {
    const metadata = {
      name: 'test-package',
      version: '1.0.0',
    };
    const comments = ['// Test comment 1', '// Test comment 2'];
    const readmeContent = generateReadme(metadata, comments);
    expect(readmeContent).toContain('# test-package');
    expect(readmeContent).toContain('## Description\nNo description provided.');
    // Add more assertions as needed
  });

  // Add more test cases as needed
});

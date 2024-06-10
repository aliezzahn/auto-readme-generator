## Auto-README Generator

Auto-README Generator is a Node.js package designed to simplify the process of creating README files for your projects. It automatically extracts metadata from your `package.json` file and parses code comments from your source files to generate a comprehensive README file, saving you time and effort.

### Features

- **Automatic Metadata Extraction**: Extracts project metadata such as name, description, version, author, and license from `package.json`.
- **Code Comment Parsing**: Parses code comments from your source files to include in the README file, providing insights into your codebase.
- **Customizable Template**: Allows customization of the generated README template to suit your project's specific requirements.

### Installation

You can install Auto-README Generator globally via npm to use it as a command-line tool:

```
npm install -g auto-readme-generator
```

Alternatively, you can install it locally in your project:

```
npm install auto-readme-generator --save-dev
```

### Usage

#### Command Line

To generate a README file for your project, navigate to your project directory and run the following command:

```
auto-readme-generator
```

#### API

You can also use Auto-README Generator programmatically in your Node.js scripts:

```javascript
const { generateReadme } = require('auto-readme-generator');

// Generate README content
const metadata = {
  // Define project metadata here
};

const comments = [
  // Provide code comments here
];

const readmeContent = generateReadme(metadata, comments);
console.log(readmeContent);
```

### Example

Below is an example of a generated README file:

```
# My Project

## Description

This is a description of my project.

## Installation

To install this project, run:

```
npm install my-project
```

## Usage

To use this project, follow these steps:

1. Initialize the project.
2. Configure the settings.
3. Run the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

John Doe

## Code Comments

1. // This is a comment in my code.
2. // Another comment here.
```

### License

Auto-README Generator is licensed under the [MIT License](LICENSE).

---

You can further customize the README file according to your project's needs.
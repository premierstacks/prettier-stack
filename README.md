# [Prettier Stack](https://github.com/premierstacks/prettier-stack) by [Tomáš Chochola](https://github.com/tomchochola)

✨ _**Clone and Win!**_

The Prettier Stack is a fully-configured set of Prettier configurations that helps you maintain consistent code formatting across various JavaScript, TypeScript, and CSS projects. It’s designed to simplify the process of setting up and using Prettier, making it easy to integrate into any development workflow.

## What is Prettier Stack?

The Prettier Stack is part of the Premierstacks collection and provides a robust, pre-configured setup for integrating Prettier into different types of projects. It offers ready-to-use configurations that cover the most common use cases, including JavaScript, TypeScript, CSS, and more. This stack can be used as a standalone CLI tool or as part of a broader build process using tools like Webpack or other task runners.

With a focus on ensuring consistent code formatting, the Prettier Stack abstracts the complexity of configuring Prettier for each project, so you don’t have to worry about manually setting up formatting rules or resolving configuration conflicts. It offers support for various environments, whether you’re working on frontend applications, backend services, or a hybrid setup.

Using the Prettier Stack helps you maintain a unified code style across different projects, making code reviews smoother and more efficient. It eliminates common formatting errors, saves time on code styling, and allows developers to focus on writing quality code without getting distracted by formatting issues.

## What is Tomchochola

[https://github.com/tomchochola](https://github.com/tomchochola)

This is my personal GitHub profile, where you’ll find public documentation and sample repositories for proprietary packages and templates from Premierstacks. These public repositories are designed to give you an overview of the best practices and high-quality code I follow in all my projects.

## What is Premierstacks

[https://github.com/premierstacks](https://github.com/premierstacks)

Premierstacks is a collection of exclusive, proprietary stacks and templates for PHP, JavaScript, TypeScript, React, and Laravel. It was created to address the common pain points developers face with many open-source projects—quality, consistency, and maintainability. With Premierstacks, you get high-quality tools built with strict attention to detail, designed to help you build and maintain better projects, faster.

## Why Premierstacks?

I created Premierstacks because I wasn’t satisfied with the quality of many open-source projects. Maintaining high-quality code and ensuring long-term reliability is challenging when you’re not earning from the product. When you pay for something, it means the creator truly cares about its success and is committed to delivering the best possible outcome.

Like Apple’s approach with their closed ecosystem, I believe that true excellence can only be achieved when every detail is under your control. That’s why Premierstacks is proprietary software—it's not just about providing solutions; it’s about ensuring those solutions meet the highest standards.

### Why You Should Choose Premierstacks

**🚀 Unmatched Quality**

Our solutions adhere to the highest standards, ensuring clean and maintainable code.

**⚙️ No Setup Hassles**

Pre-configured environments let you start coding immediately—no more complex setups.

**📦 Reuse Across Projects**

Each library and template is built to be reusable, reducing long-term maintenance.

**🔒 Exclusive Resources**

Premierstacks offers tools you won’t find in typical open-source collections.

**🛠️ Always Up-to-Date**

Receive continuous updates and new features, keeping your projects current.

**💪 Expert Creators**

Developed by experienced professionals dedicated to quality and excellence.

## License

**© 2024–Present Tomáš Chochola <chocholatom1997@gmail.com>. All rights reserved.**

This software is proprietary and licensed under specific terms set by its owner.<br />
Any form of access, use, or distribution requires a valid and active license.<br />
For full licensing terms, refer to the LICENSE.md file accompanying this software.<br />

**Purchase a license here: [Github Sponsors](https://github.com/sponsors/tomchochola)**

**See full terms here: [/LICENSE.md](/LICENSE.md)**

## Module exports

Here are the available module exports:

```js
import { recommended } from '@premierstacks/prettier-stack';
```

## Templates

Explore the predefined templates for various configurations in the [/templates](/templates) directory. These templates provide quick-start setups for different environments.

**[/templates/recommended.template](/templates/recommended.template)**<br />

## Getting Started

**1. Review the documentation and license**

Ensure this package fits your needs and that you agree with the terms.

**2. Obtain a license**

**Purchase a license here: [Github Sponsors](https://github.com/sponsors/tomchochola)**

**3. Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/prettier-stack
```

**4. Select a template**

Choose one of the predefined configuration templates from the [/templates](/templates) directory that best suits your project’s needs.

Use the `cp` command to copy it into your project as `/prettier.config.js`:

```bash
cp ./node_modules/@premierstacks/prettier-stack/templates/recommended.template ./prettier.config.js
```

**5. CLI**

Execute commands:

```bash
# automatically fix code style issues
./node_modules/.bin/prettier -w .

# perform static analysis
./node_modules/.bin/prettier -c .
```

## About the Creator

I'm Tomáš Chochola, a software developer dedicated to creating exclusive, enterprise-grade software solutions. I specialize in building packages and templates for PHP, JavaScript, and TypeScript, tailored to streamline development workflows, enforce best practices, and save you time.

My mission is to develop reusable solutions that enhance code quality, boost productivity, and ensure that projects remain maintainable and scalable over the long term.

### Specializations

**Backend Development:** Expert in PHP and Laravel<br />
**Frontend Development:** Mastery in TypeScript, React, and JavaScript<br />
**DevOps:** Proficient in managing Ubuntu and AWS environments<br />
**Security:** Focused on implementing best practices and enforcing code standards<br />
**Tooling:** Extensive experience with ESLint, Prettier, PHP CS Fixer, Stylelint, and PHPStan<br />
**Reusable Solutions:** Creating templates and configuration stacks for optimized development<br />
**Development Environments:** Fluent in Windows 11 and Ubuntu (WSL2)<br />

## Contact

**📧 Email: <chocholatom1997@gmail.com>**<br />
**💻 Website: [https://premierstacks.com](https://premierstacks.com)**<br />
**👨 GitHub Personal: [https://github.com/tomchochola](https://github.com/tomchochola)**<br />
**🏢 GitHub Organization: [https://github.com/premierstacks](https://github.com/premierstacks)**<br />
**💰 GitHub Sponsors: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)**<br />

## Tree

The following is a breakdown of the folder and file structure within this repository. It provides an overview of how the code is organized and where to find key components.

```bash
.
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierignore
├── AUTHORS.md
├── LICENSE.md
├── Makefile
├── README.md
├── eslint.config.js
├── package.json
├── prettier.config.js
├── src
│   ├── configs
│   │   └── recommended.js
│   └── index.js
└── templates
    └── recommended.template

3 directories, 14 files
```

## Figma Plugin for Seamless Image-to-Design Conversion

This project was created for Contentstack's TechSurf Hackathon and includes three unique Figma plugins designed to enhance your design workflow:

1. **Shape Generator**: Generates customizable shapes directly within Figma, allowing you to easily add geometric elements to your design.
2. **Image-to-Figma Converter**: Transforms images into editable Figma elements, enabling smooth image-to-design conversion for a streamlined workflow.
3. **Prompt-to-Figma Design Generator**: Uses the **RAG (Retrieval-Augmentation-Generation)** model to generate designs based on user prompts. This plugin combines retrieved information with Figma’s capabilities to produce designs that are contextually accurate and informed by real-time data.

To get started with these plugins, follow the setup instructions below. You can also find Figma's official plugin quickstart guide [here](https://www.figma.com/plugin-docs/plugin-quickstart-guide/).

### Prerequisites

Each plugin template uses **TypeScript** and **NPM** for smooth development. Here’s how to set up your environment:

1. **Download Node.js** (includes NPM) from [this link](https://nodejs.org/en/download/). NPM is used to install TypeScript and other libraries.
2. **Install TypeScript** globally by running:
   ```bash
   npm install -g typescript
   ```
3. In the plugin directory, install the latest type definitions for the Figma Plugin API:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

### Why TypeScript?

TypeScript extends JavaScript with type annotations, making your code more reliable by catching potential issues early. It also enhances code editors like Visual Studio Code with intelligent features, making Figma API development more intuitive. Learn more about TypeScript [here](https://www.typescriptlang.org/).

### Setting Up Your Development Environment

1. **Download Visual Studio Code** if you haven’t already: [Visual Studio Code Download](https://code.visualstudio.com/).
2. **Open the plugin directory** in Visual Studio Code.
3. To compile TypeScript into JavaScript, go to **Terminal > Run Build Task...**, and select **npm: watch**. This command will recompile your code every time you save a file, so run it each time you open VS Code.

### Plugin Details

1. **Shape Generator**: This plugin lets you quickly generate shapes within Figma, saving you time on creating geometric elements manually.
  
2. **Image-to-Figma Converter**: Convert images into editable Figma layers to enhance your workflow by bringing external visuals directly into your Figma project.

3. **Prompt-to-Figma Design Generator**: Leverages the **RAG (Retrieval-Augmentation-Generation)** model to generate designs based on user prompts.
   
   - **Retrieval**: Retrieves relevant data from a knowledge base to enhance the design context.
   - **Augmentation**: Combines this data with Figma’s capabilities.
   - **Generation**: The model generates a Figma design based on the prompt, making it contextually accurate and informed by real-time information.

For more details on each plugin, visit the code on the [GitHub repository](https://github.com/Rani-s123).


## Figma Plugin for Seamless Image-to-Design Conversion

This project was created for **Contentstack's TechSurf Hackathon** and includes three innovative Figma plugins designed to streamline and enhance your design workflow:

1. **Shape Generator**: Instantly generate customizable shapes within Figma, providing a quick way to add geometric elements to your design.
2. **Image-to-Figma Converter**: Seamlessly transforms images into editable Figma elements, enabling smooth image-to-design conversion for a cohesive workflow.
3. **Prompt-to-Figma Design Generator**: Combines **OpenAI** and the **RAG (Retrieval-Augmentation-Generation)** model to generate designs based on user prompts. This plugin integrates OpenAI’s prompt-handling capabilities with Figma's tools, leveraging real-time data retrieval and augmentation to produce designs that are contextually accurate and dynamically informed.

To begin using these plugins, follow the setup instructions below. For more details on creating Figma plugins, check out the official [Figma Plugin Quickstart Guide](https://www.figma.com/plugin-docs/plugin-quickstart-guide/).

### Prerequisites

Each plugin template is developed using **TypeScript** and **NPM** for optimized development. Here’s how to set up your environment:

1. **Download Node.js** (includes NPM) from [this link](https://nodejs.org/en/download/).
2. **Install TypeScript** globally by running:
   ```bash
   npm install -g typescript
   ```
3. Inside your plugin directory, install the latest Figma Plugin API type definitions:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

### Why TypeScript?

TypeScript extends JavaScript with type annotations, enhancing code reliability by catching potential issues early and making development more intuitive, especially with Figma’s API. Learn more about TypeScript [here](https://www.typescriptlang.org/).

### Setting Up Your Development Environment

1. **Download Visual Studio Code**: [Visual Studio Code Download](https://code.visualstudio.com/).
2. **Open your plugin directory** in Visual Studio Code.
3. To compile TypeScript into JavaScript, go to **Terminal > Run Build Task...**, and select **npm: watch**. This command will automatically recompile your code on each save.

### Plugin Details

1. **Shape Generator**: Quickly generates shapes within Figma, saving you time by automating geometric element creation.

2. **Image-to-Figma Converter**: Converts images into editable Figma layers, bringing external visuals seamlessly into your Figma project.

3. **Prompt-to-Figma Design Generator**: Powered by **OpenAI** and the **RAG (Retrieval-Augmentation-Generation)** model:
   - **Retrieval**: Uses OpenAI to retrieve relevant data from a knowledge base to enrich the design context.
   - **Augmentation**: Combines retrieved data with Figma’s design capabilities.
   - **Generation**: Produces a Figma design based on the prompt, making it both contextually accurate and dynamically informed by real-time information.

For the complete code, visit the [GitHub repository](https://github.com/Rani-s123) and check out my portfolio for more projects: [Portfolio](https://rani-s123.github.io/portofolia/).

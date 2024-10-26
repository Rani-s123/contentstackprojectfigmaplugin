const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

// Show the UI
figma.showUI(__html__, { width: 300, height: 150 });

// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'generate') {
        const userPrompt = msg.value;
        console.log("Prompt received:", userPrompt);

        // Call OpenAI API to generate design suggestions
        const designSuggestions = await getDesignSuggestions(userPrompt);
        if (designSuggestions) {
            createDesignFromSuggestions(designSuggestions);
        }

        // Close the plugin
        figma.closePlugin();
    }
};

// Function to call OpenAI API
async function getDesignSuggestions(prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: `Generate design ideas for: ${prompt}` }],
                max_tokens: 150,
            }),
        });

        const data = await response.json();
        return data.choices[0].message.content; // Return the generated design suggestions
    } catch (error) {
        console.error('Error fetching design suggestions:', error);
        return null;
    }
}

// Function to create design elements based on suggestions
function createDesignFromSuggestions(suggestions) {
    const frame = figma.createFrame();
    frame.name = "Generated Design";
    frame.resize(1440, 1024); // Set the size of the frame

    const textNode = figma.createText();
    textNode.characters = suggestions;
    textNode.fontSize = 24;
    textNode.y = 20;
    frame.appendChild(textNode);

    // Center the frame in the viewport
    figma.viewport.scrollAndZoomIntoView([frame]);
}
const apiKey = "31cffb73739b4d95a854c0d2bfff5793"; // Replace with your actual API key
const baseUrl = "https://api.aimlapi.com/"; // Replace with the correct endpoint URL

async function getCompletion(model, messages) {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`, // Assuming the API uses Bearer token authorization
        },
        body: JSON.stringify({
            model,
            messages,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error fetching completion: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

async function main() {
    const model = "mistralai/Mistral-7B-Instruct-v0.2"; // Assuming the model name is the same
    const messages = [
        { role: "system", content: "You are an AI assistant who knows everything." },
        { role: "user", content: "Tell me, why is the sky blue?" },
    ];

    try {
        const message = await getCompletion(model, messages);
        const responseDiv = document.getElementById("response"); // Get the response element
        responseDiv.textContent = message; // Update the element's text content
    } catch (error) {
        console.error(error);
    }
}

main();

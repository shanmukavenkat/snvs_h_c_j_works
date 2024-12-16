document.addEventListener('DOMContentLoaded', () => {
  let textElement = document.getElementById("text");
  let nameElement = document.getElementById("name");

  const { OpenAI } = require("openai");

  const openai = new OpenAI({
    apiKey: "31cffb73739b4d95a854c0d2bfff5793", // Use environment variables for security
    baseURL: "https://api.openai.com", // Ensure this is the correct base URL
  });

  (async () => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          { role: "system", content: "You are a company owner. Be descriptive and helpful." },
          { role: "user", content: "I am a company owner" },
        ],
        temperature: 0.7,
        max_tokens: 128,
      });

      console.log("AI/ML API:\n", chatCompletion.choices[0].message.content);
      const contentNode = document.createTextNode(chatCompletion.choices[0].message.content);
      textElement.appendChild(contentNode);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  })();
});

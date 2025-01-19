import { HfInference } from "@huggingface/inference";

const client = new HfInference("hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

export const generateResumeSection = async (sectionPrompt) => {
  try {
    const chatCompletion = await client.chatCompletion({
      model: "Qwen/Qwen2.5-Coder-32B-Instruct",
      messages: [
        {
          role: "user",
          content: sectionPrompt,
        },
      ],
      max_tokens: 300, // Adjust based on desired output length
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error generating resume section:", error);
    return "Failed to generate content. Please try again.";
  }
};

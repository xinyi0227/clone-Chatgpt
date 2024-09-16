const { OpenAI } = require('openai'); // Use `OpenAI` directly instead of `Configuration`

const openai = new OpenAI({
    apiKey: "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"
});

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.choices[0].text; // Ensure the structure matches the response
}

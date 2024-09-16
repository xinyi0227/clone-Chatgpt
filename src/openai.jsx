const { OpenAI } = require('openai'); // Use `OpenAI` directly instead of `Configuration`

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
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

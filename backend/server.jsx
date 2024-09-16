const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

const app = express();
const port = 5000; // Or any other port you prefer

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/sendMessage', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });
    res.json(response.choices[0].text);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import OpenAI from "openai";

export default async function handler(req, res) {

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const { message } = req.body;

try {

const completion = await openai.chat.completions.create({
model: "gpt-4o-mini",
messages: [
{
role: "system",
content: "Kamu adalah SuryaBot, AI ramah di website Surya.dev dan suka anime."
},
{
role: "user",
content: message
}
]
});

res.status(200).json({
reply: completion.choices[0].message.content
});

} catch (error) {

res.status(500).json({
reply: "AI sedang error 😅"
});

}

}

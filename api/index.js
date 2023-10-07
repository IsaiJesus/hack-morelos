const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const {OpenAIApi} = require("openai")

const openai = new OpenAIApi({
  api_key: "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"
})

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post("/chat", async (req, res) => {
  const {prompt} = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 20,
    temperature: 0,
    prompt: prompt
  })

  res.send(completion.data.choices[0].text)
})

const port = 8080;
app.listen(port, () =>{
  console.log(`Server on port: ${port}`)
})
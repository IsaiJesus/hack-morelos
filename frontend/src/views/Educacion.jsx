import { useState } from "react";

export default function Educacion() {
  const API_KEY = "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";

  const [change, setChange] = useState("");
  const [prompt, setPrompt] = useState([]);

  const getCompletion = async (prompt) => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    return await res.json();
  };

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getCompletion(change);
    setPrompt(response.choices[0].message.content);
  };

  console.log(prompt);

  return (
    <div>
      <h1>IA</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Escribe tu respuesta"
        />
        <button>Enviar</button>
      </form>
      {prompt ? <p>{prompt}</p> : <p>...</p>}
    </div>
  );
}

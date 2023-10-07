import { useState } from "react";
import { FaAngleLeft, FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ChatBot() {
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
    if (change) {
      e.preventDefault();
      const response = await getCompletion(change);
      setPrompt(response.choices[0].message.content);
    }
  };

  return (
    <main className="chatbox-box">
      <div className="chat-header-box">
        <Link to="/education">
          <FaAngleLeft />
        </Link>
        <progress className="progress" max="100" value="70"></progress>
      </div>
      <div className="form-box">
        {prompt ? <p>{prompt}</p> : <p>...</p>}
        <p>tu respuesta</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Escribe tu respuesta"
          />
          <button>
            <FaLocationArrow />
          </button>
        </form>
      </div>
    </main>
  );
}

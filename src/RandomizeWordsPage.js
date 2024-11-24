import React, { useState } from "react";

const RandomizeWordsPage = () => {
  const [words, setWords] = useState([]);
  const [wordInput, setWordInput] = useState("");
  const [randomWord, setRandomWord] = useState(null);

  const addWord = () => {
    if (wordInput.trim() === "") return;
    setWords((prev) => [...prev, wordInput.trim()]);
    setWordInput("");
  };

  const pickRandomWord = () => {
    if (words.length === 0) {
      alert("No words to pick from!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  };

  const clearWords = () => {
    setWords([]);
    setRandomWord(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if inside a form
      addWord();
    }
  };

  return (
    <div className="container">
      <h1>Randomize Words</h1>
      <input
        type="text"
        value={wordInput}
        onChange={(e) => setWordInput(e.target.value)}
        onKeyDown={handleKeyPress} // Add this to listen for "Enter" key
        placeholder="Enter a word"
      />
      <button onClick={addWord} style={{ marginLeft: "10px" }}>
        Add Word
      </button>
      <div style={{ marginTop: "20px" }}>
        {words.length > 0 && (
          <>
            <button onClick={pickRandomWord}>Pick a Word</button>
            <button
              onClick={clearWords}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Clear All
            </button>
          </>
        )}
      </div>
      <div className="grid">
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            {word}
          </span>
        ))}
      </div>
      {randomWord && <div className="random-word">Random Word: {randomWord}</div>}
    </div>
  );
};

export default RandomizeWordsPage;
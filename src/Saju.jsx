import React, { useState } from 'react';

function Saju() {
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '', time: '' });
  const [fortune, setFortune] = useState('');

  const handleChange = (e) => {
    setBirthDate({ ...birthDate, [e.target.name]: e.target.value });
  };

  const generateFortune = () => {
    // This is a placeholder for the actual Saju logic.
    // For now, it will generate a random fortune.
    const fortunes = [
      "An unexpected windfall is coming your way.",
      "You will meet a mysterious stranger who will change your life.",
      "A long-held wish will finally be granted.",
      "Be wary of someone trying to deceive you.",
      "Now is a good time to start a new project.",
      "You will travel to a new and exciting place soon."
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthDate.year && birthDate.month && birthDate.day && birthDate.time) {
      generateFortune();
    } else {
      setFortune('Please enter your full birth date and time.');
    }
  };

  return (
    <div className="saju-container">
      <h1>Your Fortune Awaits</h1>
      <form onSubmit={handleSubmit}>
        <div className="birth-inputs">
          <input type="number" name="year" placeholder="Year" onChange={handleChange} value={birthDate.year} />
          <input type="number" name="month" placeholder="Month" onChange={handleChange} value={birthDate.month} />
          <input type="number" name="day" placeholder="Day" onChange={handleChange} value={birthDate.day} />
          <input type="text" name="time" placeholder="Time (e.g., 14:30)" onChange={handleChange} value={birthDate.time} />
        </div>
        <button type="submit">See Your Fortune</button>
      </form>
      {fortune && (
        <div className="fortune-result">
          <h2>Today's Fortune:</h2>
          <p>{fortune}</p>
        </div>
      )}
    </div>
  );
}

export default Saju;

import React, { useState } from 'react';

// Data for MBTI and Zodiac signs
const mbtiData = {
    'INTJ': { personality: 'Imaginative and strategic thinkers, with a plan for everything.', datingStyle: 'They seek intellectual connection and are very direct about their needs.' },
    'INTP': { personality: 'Innovative inventors with an unquenchable thirst for knowledge.', datingStyle: 'They are unconventional and enjoy deep, meaningful conversations.' },
    'ENTJ': { personality: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.', datingStyle: 'They are decisive and take charge in relationships.' },
    'ENTP': { personality: 'Smart, curious thinkers who cannot resist an intellectual challenge.', datingStyle: 'They are energetic and love debating with their partner.' },
    'INFJ': { personality: 'Quiet and mystical, yet very inspiring and tireless idealists.', datingStyle: 'They seek deep, authentic connections and are very nurturing.' },
    'INFP': { personality: 'Poetic, kind and altruistic people, always eager to help a good cause.', datingStyle: 'They are romantic idealists looking for their soulmate.' },
    'ENFJ': { personality: 'Charismatic and inspiring leaders, able to mesmerize their listeners.', datingStyle: 'They are supportive, and their relationships are often centered on mutual growth.' },
    'ENFP': { personality: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.', datingStyle: 'They are spontaneous and bring a lot of excitement to relationships.' },
    'ISTJ': { personality: 'Practical and fact-minded individuals, whose reliability cannot be doubted.', datingStyle: 'They are traditional and show their love through actions rather than words.' },
    'ISFJ': { personality: 'Very dedicated and warm protectors, always ready to defend their loved ones.', datingStyle: 'They are incredibly loyal and committed partners.' },
    'ESTJ': { personality: 'Excellent administrators, unsurpassed at managing things - or people.', datingStyle: 'They are organized and value stability in their relationships.' },
    'ESFJ': { personality: 'Extraordinarily caring, social and popular people, always eager to help.', datingStyle: 'They are very in tune with their partner\'s needs and love to please them.' },
    'ISTP': { personality: 'Bold and practical experimenters, masters of all kinds of tools.', datingStyle: 'They are independent and enjoy sharing new experiences with their partner.' },
    'ISFP': { personality: 'Flexible and charming artists, always ready to explore and experience something new.', datingStyle: 'They are gentle, caring and go with the flow.' },
    'ESTP': { personality: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.', datingStyle: 'They are fun-loving and live in the moment.' },
    'ESFP': { personality: 'Spontaneous, energetic and enthusiastic entertainers - life is never boring around them.', datingStyle: 'They are expressive and love showering their partner with affection.' },
};

const zodiacData = {
    'Aries': { traits: 'Ambitious, independent, and confident.' },
    'Taurus': { traits: 'Patient, practical, and devoted.' },
    'Gemini': { traits: 'Curious, adaptable, and expressive.' },
    'Cancer': { traits: 'Intuitive, emotional, and compassionate.' },
    'Leo': { traits: 'Proud, bold, and ambitious.' },
    'Virgo': { traits: 'Loyal, analytical, and practical.' },
    'Libra': { traits: 'Diplomatic, fair, and social.' },
    'Scorpio': { traits: 'Passionate, resourceful, and brave.' },
    'Sagittarius': { traits: 'Optimistic, funny, and generous.' },
    'Capricorn': { traits: 'Serious, disciplined, and independent.' },
    'Aquarius': { traits: 'Imaginative, original, and uncompromising.' },
    'Pisces': { traits: 'Creative, empathetic, and generous.' },
};

const mbtiTypes = Object.keys(mbtiData);
const zodiacSigns = Object.keys(zodiacData);

function PersonalityOracle() {
    const [mbti, setMbti] = useState(mbtiTypes[0]);
    const [zodiac, setZodiac] = useState(zodiacSigns[0]);
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mbtiInfo = mbtiData[mbti];
        const zodiacInfo = zodiacData[zodiac];
        setResult({ mbtiInfo, zodiacInfo });
    };

    return (
        <div className="oracle-container">
            <h1>Personality & Dating Style Oracle</h1>
            <form onSubmit={handleSubmit}>
                <div className="select-container">
                    <label>
                        Your MBTI:
                        <select value={mbti} onChange={(e) => setMbti(e.target.value)}>
                            {mbtiTypes.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </label>
                    <label>
                        Your Zodiac Sign:
                        <select value={zodiac} onChange={(e) => setZodiac(e.target.value)}>
                            {zodiacSigns.map(sign => <option key={sign} value={sign}>{sign}</option>)}
                        </select>
                    </label>
                </div>
                <button type="submit">Reveal Your Profile</button>
            </form>

            {result && (
                <div className="result-container">
                    <h2>Your Profile</h2>
                    <div className="result-section">
                        <h3>MBTI: {mbti}</h3>
                        <p><strong>Personality:</strong> {result.mbtiInfo.personality}</p>
                        <p><strong>Dating Style:</strong> {result.mbtiInfo.datingStyle}</p>
                    </div>
                    <div className="result-section">
                        <h3>Zodiac: {zodiac}</h3>
                        <p><strong>General Traits:</strong> {result.zodiacInfo.traits}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonalityOracle;

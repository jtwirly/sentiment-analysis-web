import React from 'react';
import SentimentAnalysisForm from './SentimentAnalysisForm';

function App() {
  return (
    <div className="container mt-5">
      <h1>VibeCheck</h1>
      <p>Curious whether that email or your partner's text is good vibes, bad vibes, or somewhere in between? Copy it into VibeCheck, and get AI's opinion on the matter.</p>
      <SentimentAnalysisForm />
      <p>Score of the vibe/sentiment ranges between -1.0 (negative) and 1.0 (positive) and corresponds to the overall emotional leaning of the text. Sample values: Good Vibes (Clearly Positive): 0.8. Bad Vibes (Clearly Negative): -0.6. Neutral Vibes (Neutral): 0.1. Mixed Vibes (Mixed): 0.0. </p>
      <p>Want to get some AI-powered advice on how to handle the situation? Check out our sister webapp, <a href="http://dearaibby.herokuapp.com">Dear AIbby</a>!</p>
    </div>
  );
}

export default App;

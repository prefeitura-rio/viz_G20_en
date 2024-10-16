import React, { useEffect } from 'react';
import "./Quiz.css";
const Quiz = () => {
  useEffect(() => {
    // Load the Flourish embed script dynamically
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup to avoid duplicate scripts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="quiz-container">
      <div
        className="flourish-embed flourish-quiz"
        data-src="visualisation/19837842"
      >
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/19837842/thumbnail"
            width="100%"
            alt="quiz visualization"
          />
        </noscript>
      </div>
    </div>
  );
};

export default Quiz;

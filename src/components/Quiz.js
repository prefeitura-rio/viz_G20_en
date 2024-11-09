import React, { useState } from "react";
import "./Quiz.css"; // Import CSS for styling
import x from "../assets/x.svg";
import check from "../assets/check.svg";
const Quiz = () => {
  // Sample quiz data
  const quizData = [
    {
      id: 1,
      imageUrl: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/quizcapa.jpg", // Replace with actual image URL
      question: "How many countries, besides the African Union and the European Union, are part of the G20?",
      options: [
        { text: "15", isCorrect: false },
        { text: "19", isCorrect: true },
        { text: "20", isCorrect: false },
        { text: "21", isCorrect: false },
      ],
      explanation: "Historically, the G20 consists of 19 countries plus the European Union. The African Union was officially admitted as a permanent member in 2023, at the India summit.",
    },
    {
      id: 2,
      imageUrl: "https://www.example.com/image2.jpg", // Replace with actual image URL
      question: "What is the main objective of the G20?",
      options: [
        { text: "Promote world peace", isCorrect: false },
        { text: "Strengthen military alliances", isCorrect: false },
        { text: "Expand international trade", isCorrect: false },
        { text: "Coordinate global economic policies", isCorrect: true },
      ],
      explanation: "In the past, the group emerged to provide responses to crises, today it is a privileged space to anticipate instabilities and create joint solutions in areas ranging from trade to culture, from technology to climate change.",
    },
    {
      id: 3,
      imageUrl: "https://www.example.com/image3.jpg", // Replace with actual image URL
      question: "Which country hosted the first G20 meeting?",
      options: [
        { text: "Germany", isCorrect: true },
        { text: "Canada", isCorrect: false },
        { text: "Japan", isCorrect: false },
        { text: "United States", isCorrect: false },
      ],
      explanation: "Berlin hosted the first G20 meeting in 1999 because Germany was one of the main drivers of the group's creation, together with Canada.",
    },
    {
      id: 4,
      imageUrl: "https://www.example.com/image4.jpg", // Replace with actual image URL
      question: "Which of these countries is not a member of the G20?",
      options: [
        { text: "Mexico", isCorrect: false },
        { text: "Colombia", isCorrect: true },
        { text: "Argentina", isCorrect: false },
        { text: "Australia", isCorrect: false },
      ],
      explanation: "Although Colombia is the 3rd largest economy in South America, it is not one of the 19 largest economies in the world in terms of market size and population, criteria that weigh in the composition of the G20.",
    },
    {
      id: 5,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Which of these was a central agenda for Brazil at the 2024 G20?",
      options: [
        { text: "Rising sea levels", isCorrect: false },
        { text: "Combating hunger, poverty, and inequality", isCorrect: true },
        { text: "Creating an alliance for peace", isCorrect: false },
        { text: "Reducing trade tariffs", isCorrect: false },
      ],
      explanation: "The priority issues established by the Brazilian government are combating hunger, poverty, and inequality, the three dimensions of sustainable development (economic, social, and environmental), and the reform of global governance.",
    },
    {
      id: 6,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Is Brazil a founding member of the G20?",
      options: [
        { text: "Yes", isCorrect: true },
        { text: "No", isCorrect: false },
      ],
      explanation: "Since 1999, the country has played a relevant role in the forum, defending the interests of emerging economies and promoting discussions on sustainable development and social inclusion.",
    },
    {
      id: 7,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "In what year did Brazil host the G20 for the first time?",
      options: [
        { text: "2008", isCorrect: false },
        { text: "2014", isCorrect: false },
        { text: "2024", isCorrect: true },
        { text: "1999", isCorrect: false },
      ],
      explanation: "For Brazil, the first leadership in the G20 is an opportunity for international reintegration through a high-level economic forum, in which the country has traditionally had active contributions.",
    },
    {
      id: 8,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Which of these international institutions is regularly invited to the G20?",
      options: [
        { text: "UN", isCorrect: true },
        { text: "FIFA", isCorrect: false },
        { text: "Red Cross", isCorrect: false },
        { text: "IOC", isCorrect: false },
      ],
      explanation: "UN agencies participated in debates on combating hunger, strengthening health, promoting decent work, and innovative ideas for the future.",
    },
    {
      id: 9,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Which of these continents has the most countries represented in the G20?",
      options: [
        { text: "South America", isCorrect: false },
        { text: "North America", isCorrect: false },
        { text: "Asia", isCorrect: false },
        { text: "Europe", isCorrect: true },
      ],
      explanation: "With several European countries, such as Germany, France, Italy, and the United Kingdom, Europe has more countries in the G20 than any other region.",
    },
  ];

  // State to store the selected options and whether options have been clicked
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [isAnswered, setIsAnswered] = useState(Array(quizData.length).fill(false));

  // Handle option click
  const handleOptionClick = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    const newIsAnswered = [...isAnswered];
    newSelectedOptions[questionIndex] = optionIndex;
    newIsAnswered[questionIndex] = true;
    setSelectedOptions(newSelectedOptions);
    setIsAnswered(newIsAnswered);
  };

  return (
    <div className="quiz-container2">
      <div className="quiz-container">
        <div className="g20_title"><b>Test Your Knowledge about the G20!</b> After absorbing the content of the dataviz, find out how much you know about the G20, Brazil's role, and the main topics discussed at the event.</div>
        <br></br>
        <br></br>
        <div className="quiz-image">
          <img src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/quizcapa.jpg" alt="Quiz" />
        </div>
        {quizData.map((question, questionIndex) => (
          <div key={question.id} className="quiz-item">
            <div className="quiz-content">
              <div className="quiz-question">
                <span>{questionIndex + 1} of {quizData.length}</span>
                <h3>{question.question}</h3>
              </div>
              <div className="quiz-options">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`option-btn ${isAnswered[questionIndex]
                      ? selectedOptions[questionIndex] === optionIndex
                        ? option.isCorrect
                          ? "correct"
                          : "incorrect"
                        : option.isCorrect
                          ? "correct"
                          : ""
                      : ""
                      }`}
                    onClick={() => handleOptionClick(questionIndex, optionIndex)}
                    disabled={isAnswered[questionIndex]}
                  >
                    <span className="option-text">{option.text}</span>
                    {isAnswered[questionIndex] && selectedOptions[questionIndex] === optionIndex && !option.isCorrect && (
                      <span className="feedback-icon"><img src={x} alt="x"></img></span>
                    )}
                    {isAnswered[questionIndex] && option.isCorrect && (
                      <span className="feedback-icon correct-icon"><img src={check} alt="check"></img></span>
                    )}
                  </button>
                ))}
              </div>
              {isAnswered[questionIndex] && (
                <div className="quiz-explanation">
                  <p>{question.explanation}</p>
                </div>
              )}
            </div>
            {questionIndex < quizData.length - 1 && <hr className="separator" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
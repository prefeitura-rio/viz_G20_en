import React, { useState } from "react";
import "./Quiz.css"; // Import CSS for styling
import x from "../assets/x.svg";
import check from "../assets/check.svg";
const Quiz = () => {
  // Sample quiz data
  const quizData = [
    {
      id: 1,
      imageUrl: "https://www.example.com/image1.jpg", // Replace with actual image URL
      question: "Quantos países, além da União Africana e União Europeia, fazem parte do G20?",
      options: [
        { text: "15", isCorrect: false },
        { text: "19", isCorrect: true },
        { text: "20", isCorrect: false },
        { text: "21", isCorrect: false },
      ],
      explanation: "Historicamente, o G20 são 19 países mais a União Europeia. A União Africana foi oficialmente admitida como membro permanente em 2023, na cúpula da Índia.",
    },
    {
      id: 2,
      imageUrl: "https://www.example.com/image2.jpg", // Replace with actual image URL
      question: "Qual é o principal objetivo do G20?",
      options: [
        { text: "Promover a paz mundial", isCorrect: false },
        { text: "Fortalecer alianças militares", isCorrect: false },
        { text: "Expandir o comércio internacional", isCorrect: false },
        { text: "Coordenar políticas econômicas globais", isCorrect: true },
      ],
      explanation: "Se, no passado, o grupo surgiu para prover respostas a crises, hoje é um espaço privilegiado para antever instabilidades e criar soluções conjuntas em áreas que variam do comércio à cultura, da tecnologia à mudança do clima.",
    },
    {
      id: 3,
      imageUrl: "https://www.example.com/image3.jpg", // Replace with actual image URL
      question: "Qual país sediou a primeira reunião do G20?",
      options: [
        { text: "Alemanha", isCorrect: true },
        { text: "Canadá", isCorrect: false },
        { text: "Japão", isCorrect: false },
        { text: "Estados Unidos", isCorrect: false },
      ],
      explanation: "Berlim sediou a primeira reunião do G20 em 1999 porque a Alemanha foi um dos principais impulsionadores da criação do grupo, em conjunto com o Canadá.",
    },
    {
      id: 4,
      imageUrl: "https://www.example.com/image4.jpg", // Replace with actual image URL
      question: "Qual destes não é um membro do G20?",
      options: [
        { text: "México", isCorrect: false },
        { text: "Colômbia", isCorrect: true },
        { text: "Argentina", isCorrect: false },
        { text: "Austrália", isCorrect: false },
      ],
      explanation: "Embora a Colômbia seja a 3ª maior economia da América do Sul, ela não é uma das 19 maiores economias do mundo em termos de tamanho de mercado e população, critérios que pesam na composição do G20.",
    },
    {
      id: 5,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Qual dessas foi uma pauta central para o Brasil no G20 de 2024?",
      options: [
        { text: "Reforma da ONU", isCorrect: false },
        { text: "Combate à fome, pobreza e desigualdade", isCorrect: true },
        { text: "Criação de uma aliança pela paz", isCorrect: false },
        { text: "Redução das tarifas de comércio", isCorrect: false },
      ],
      explanation: "Os assuntos prioritários estabelecidos pelo governo brasileiro são combate à fome, pobreza e desigualdade, as três dimensões do desenvolvimento sustentável (econômica, social e ambiental) e a reforma da governança global.",
    },
    {
      id: 6,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "O Brasil é membro fundador do G20?",
      options: [
        { text: "Sim", isCorrect: true },
        { text: "Não", isCorrect: false },
      ],
      explanation: "Desde 1999, o país tem desempenhado um papel relevante no fórum, defendendo os interesses das economias emergentes e promovendo discussões sobre desenvolvimento sustentável e inclusão social.",
    },
    {
      id: 7,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Em que ano o Brasil sediou pela primeira vez o G20?",
      options: [
        { text: "2008", isCorrect: false },
        { text: "2014", isCorrect: false },
        { text: "2024", isCorrect: true },
        { text: "1999", isCorrect: false },
      ],
      explanation: "Para o Brasil, a primeira liderança no G20 é uma oportunidade de reinserção internacional a partir de um fórum econômico de alto nível, no qual, tradicionalmente, o país teve contribuições ativas.",
    },
    {
      id: 8,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Qual destas instituições internacionais é regularmente convidada para o G20?",
      options: [
        { text: "ONU", isCorrect: true },
        { text: "FIFA", isCorrect: false },
        { text: "Cruz Vermelha", isCorrect: false },
        { text: "NASA", isCorrect: false },
      ],
      explanation: "Agências da ONU participaram de debates sobre combate à fome, reforço da saúde, promoção do trabalho decente e ideias inovadoras para o futuro.",
    },
    {
      id: 9,
      imageUrl: "https://www.example.com/image5.jpg", // Replace with actual image URL
      question: "Qual destas regiões tem mais países representados no G20?",
      options: [
        { text: "América do Sul", isCorrect: false },
        { text: "América do Norte", isCorrect: false },
        { text: "Ásia", isCorrect: false },
        { text: "Europa", isCorrect: true },
      ],
      explanation: "Com vários países europeus, como Alemanha, França, Itália, Reino Unido, a Europa tem mais países no G20 que qualquer outra região.",
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
        <div className="g20_title">Teste seu Conhecimento sobre o G20! Depois de absorver o conteúdo do dataviz, descubra o quanto você sabe sobre o G20, o papel do Brasil e os principais temas discutidos no evento.</div>
        <br></br>
        <br></br>
        {quizData.map((question, questionIndex) => (
          <div key={question.id} className="quiz-item">
            <div className="quiz-image">
              {/* {question.imageUrl && <img src={question.imageUrl} alt="Quiz" />} */}
            </div>
            <div className="quiz-content">
              <div className="quiz-question">
                <span>{questionIndex + 1} de {quizData.length}</span>
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
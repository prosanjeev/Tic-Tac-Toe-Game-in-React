// src/App.js
import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset, Container, Button} from '@chakra-ui/react';
import Question from './components/Question';
import Options from './components/Options';
import FinalScore from './components/FinalScore';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/questions.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch questions. Status: ${response.status}`);
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Check if we have answered all 10 questions
    if (answeredQuestions.length === 10) {
      console.log('Your Final Score:', score);
    }
  }, [score, answeredQuestions]);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      const selectedOptionObj = currentQuestion.options.find(
        (option) => option.id === selectedOption
      );

      if (selectedOptionObj && selectedOptionObj.isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      setAnsweredQuestions((prev) => [...prev, currentQuestionIndex]); // Mark question as answered

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null); // Reset selected option for the new question
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const isQuestionAnswered = (index) => answeredQuestions.includes(index);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (answeredQuestions.length === 10) {
    // All questions answered, render FinalScore component
    return (
      <ChakraProvider>
        <CSSReset />
        <Container maxW="container.sm" centerContent>
          <FinalScore score={score} />
        </Container>
      </ChakraProvider>
    );
  }

  // Render Question and Options components for each question
  return (
    <ChakraProvider>
      <CSSReset />
      <Container maxW="container.sm" centerContent>
        <Question key={`question-${currentQuestionIndex}`} question={questions[currentQuestionIndex]} />
        <Options
          key={`options-${currentQuestionIndex}`}
          options={questions[currentQuestionIndex].options}
          selectedOption={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          disabled={isQuestionAnswered(currentQuestionIndex)}
        />
        <Button mt={4} colorScheme="teal" onClick={handleNextQuestion}>
          Next
        </Button>
      </Container>
    </ChakraProvider>
  );
};

export default App;

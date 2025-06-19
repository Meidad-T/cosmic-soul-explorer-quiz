
import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultScreen from '@/components/ResultScreen';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'start' | 'quiz' | 'result'>('start');
  const [answers, setAnswers] = useState<number[]>([]);

  const startQuiz = () => {
    setCurrentScreen('quiz');
    setAnswers([]);
  };

  const submitAnswer = (answerIndex: number) => {
    setAnswers(prev => [...prev, answerIndex]);
  };

  const finishQuiz = () => {
    setCurrentScreen('result');
  };

  const restartQuiz = () => {
    setCurrentScreen('start');
    setAnswers([]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
      <SpaceBackground />
      
      <div className="relative z-10">
        {currentScreen === 'start' && (
          <StartScreen onStart={startQuiz} />
        )}
        
        {currentScreen === 'quiz' && (
          <QuizScreen 
            answers={answers}
            onAnswer={submitAnswer}
            onFinish={finishQuiz}
          />
        )}
        
        {currentScreen === 'result' && (
          <ResultScreen 
            answers={answers}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default Index;

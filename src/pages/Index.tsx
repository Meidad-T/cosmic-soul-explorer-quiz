
import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultScreen from '@/components/ResultScreen';
import LearnPage from '@/components/LearnPage';
import Navigation from '@/components/Navigation';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
  const [currentView, setCurrentView] = useState<'quiz' | 'learn'>('quiz');
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

  const handleViewChange = (view: 'quiz' | 'learn') => {
    setCurrentView(view);
    if (view === 'quiz') {
      setCurrentScreen('start');
      setAnswers([]);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
      <SpaceBackground />
      <Navigation currentView={currentView} onViewChange={handleViewChange} />
      
      <div className="relative z-10">
        {currentView === 'learn' ? (
          <LearnPage />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Index;

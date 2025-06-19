
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface QuizScreenProps {
  answers: number[];
  onAnswer: (answerIndex: number) => void;
  onFinish: () => void;
}

const questions = [
  {
    question: "What's your ideal way to spend a weekend?",
    options: [
      "Exploring new places and meeting people",
      "Reading books and learning something new", 
      "Having deep conversations with close friends",
      "Working on creative projects alone"
    ]
  },
  {
    question: "Which environment energizes you most?",
    options: [
      "Bustling cities with endless activity",
      "Quiet libraries or peaceful gardens",
      "Cozy cafes with interesting people",
      "Remote locations with stunning views"
    ]
  },
  {
    question: "Your friends would describe you as:",
    options: [
      "The life of the party - always enthusiastic",
      "The wise one - thoughtful and reliable", 
      "The mysterious one - complex and intriguing",
      "The creative one - artistic and unique"
    ]
  },
  {
    question: "What fascinates you most about space?",
    options: [
      "The possibility of alien life and civilizations",
      "The mathematical beauty of celestial mechanics",
      "The mysterious nature of black holes and dark matter",
      "The stunning visual beauty of nebulae and galaxies"
    ]
  },
  {
    question: "How do you handle challenges?",
    options: [
      "Jump in headfirst with confidence",
      "Analyze carefully before taking action",
      "Work through them slowly and persistently",
      "Find creative, unconventional solutions"
    ]
  },
  {
    question: "What's your ideal temperature?",
    options: [
      "Hot and sunny - bring on the heat!",
      "Cool and comfortable - just right",
      "Cold and crisp - refreshing and clear",
      "Varies - I adapt to anything"
    ]
  },
  {
    question: "Which quality do you value most?",
    options: [
      "Passion and energy",
      "Wisdom and knowledge",
      "Depth and authenticity", 
      "Creativity and originality"
    ]
  },
  {
    question: "Your perfect superpower would be:",
    options: [
      "Super speed - get everywhere instantly",
      "Telepathy - understand everything deeply",
      "Invisibility - observe without being seen",
      "Shape-shifting - be anyone or anything"
    ]
  }
];

const QuizScreen = ({ answers, onAnswer, onFinish }: QuizScreenProps) => {
  const currentQuestionIndex = answers.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    onAnswer(answerIndex);
    
    if (currentQuestionIndex === questions.length - 1) {
      setTimeout(onFinish, 500);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-blue-300 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-blue-900/30 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question card */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {currentQuestion.question}
          </h2>
          
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                className="bg-white/5 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white p-6 h-auto text-left justify-start text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] group"
                variant="outline"
              >
                <span className="flex-1">{option}</span>
                <ChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            ))}
          </div>
        </Card>

        {/* Navigation hint */}
        <div className="text-center text-blue-300 animate-pulse">
          <ArrowRight className="w-5 h-5 inline mr-2" />
          Choose your answer to continue your cosmic journey
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;

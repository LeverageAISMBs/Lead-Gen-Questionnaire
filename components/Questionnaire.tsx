
import React, { useState, useEffect } from 'react';
import { ASSESSMENT_QUESTIONS } from '../constants';
import { UserAnswers, Question, QuestionOption } from '../types';

interface QuestionnaireProps {
    onSubmit: (answers: UserAnswers) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onSubmit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<UserAnswers>({});
    const [error, setError] = useState<string | null>(null);

    const currentQuestion: Question = ASSESSMENT_QUESTIONS[currentQuestionIndex];
    const progress = Math.round(((currentQuestionIndex) / ASSESSMENT_QUESTIONS.length) * 100);

    const handleAnswer = (questionId: string, value: string | number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
        setError(null);
    };

    const nextQuestion = () => {
        // Validation
        if (currentQuestion.required && !answers[currentQuestion.id]) {
            setError('This field is required.');
            return;
        }
        if (currentQuestion.questionType === 'email' && answers[currentQuestion.id]) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(answers[currentQuestion.id] as string)) {
                 setError('Please enter a valid email address.');
                 return;
            }
        }
        
        setError(null);
        if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            onSubmit(answers);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setError(null);
        }
    };
    
    // Auto-advance on radio button selection for better UX
    useEffect(() => {
        if (currentQuestion.questionType === 'radio' && answers[currentQuestion.id] !== undefined) {
            const timer = setTimeout(() => {
                nextQuestion();
            }, 300); // Short delay for user to see their selection
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers, currentQuestion.id, currentQuestion.questionType]);

    const renderInput = () => {
        const { id, questionType, options } = currentQuestion;
        const value = answers[id] || '';

        switch (questionType) {
            case 'text':
            case 'email':
            case 'tel':
                return (
                    <input
                        type={questionType}
                        id={id}
                        value={value as string}
                        onChange={e => handleAnswer(id, e.target.value)}
                        className="w-full max-w-lg mt-4 p-4 bg-slate-800 border-2 border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                        placeholder="Type your answer here..."
                        autoFocus={currentQuestionIndex < 3}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        id={id}
                        value={value as string}
                        onChange={e => handleAnswer(id, e.target.value)}
                        className="w-full max-w-lg mt-4 p-4 bg-slate-800 border-2 border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 text-lg"
                        placeholder="Share your thoughts..."
                    />
                );
            case 'radio':
                return (
                    <div className="w-full max-w-lg mt-4 space-y-3">
                        {options?.map((option: QuestionOption) => (
                            <label
                                key={option.value}
                                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${value === option.value ? 'bg-teal-500/20 border-teal-500' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}
                            >
                                <input
                                    type="radio"
                                    name={id}
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={() => handleAnswer(id, option.value)}
                                    className="hidden"
                                />
                                <span className={`w-6 h-6 mr-4 rounded-full border-2 flex-shrink-0 ${value === option.value ? 'bg-teal-500 border-teal-400' : 'border-slate-500'}`}></span>
                                <span className="text-lg">{option.text}</span>
                            </label>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };
    
    const isContactStep = currentQuestion.type === 'contact';

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
             {/* Progress Bar */}
            <div className="w-full max-w-2xl px-4 fixed top-0 left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-slate-700 rounded-full h-2.5">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                </div>
            </div>

            <div className="w-full max-w-2xl text-center flex-grow flex flex-col justify-center">
                 <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    {currentQuestion.text}
                </h2>
                {isContactStep && <p className="text-slate-400 mb-4">Let's start with the basics.</p>}
                
                <div className="flex justify-center">
                    {renderInput()}
                </div>

                {error && <p className="text-red-400 mt-4">{error}</p>}
            </div>

            {/* Navigation */}
            <div className="w-full max-w-2xl flex justify-between items-center mt-8 pb-4">
                <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Back
                </button>
                {(currentQuestion.questionType !== 'radio' || currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1) && (
                    <button
                        onClick={nextQuestion}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
                    >
                        {currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1 ? 'See My Results' : 'Next'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Questionnaire;

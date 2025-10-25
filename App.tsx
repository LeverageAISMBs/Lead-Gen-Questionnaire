
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Questionnaire from './components/Questionnaire';
import ResultsPage from './components/ResultsPage';
import { UserAnswers } from './types';

type AppState = 'landing' | 'questionnaire' | 'results';

const App: React.FC = () => {
    const [appState, setAppState] = useState<AppState>('landing');
    const [answers, setAnswers] = useState<UserAnswers>({});

    const startAssessment = () => {
        setAppState('questionnaire');
    };

    const submitAssessment = (finalAnswers: UserAnswers) => {
        setAnswers(finalAnswers);
        setAppState('results');
    };
    
    const restartAssessment = () => {
        setAnswers({});
        setAppState('landing');
    }

    const renderContent = () => {
        switch (appState) {
            case 'landing':
                return <LandingPage onStart={startAssessment} />;
            case 'questionnaire':
                return <Questionnaire onSubmit={submitAssessment} />;
            case 'results':
                return <ResultsPage answers={answers} onRestart={restartAssessment} />;
            default:
                return <LandingPage onStart={startAssessment} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 font-sans antialiased text-slate-200">
            <main>{renderContent()}</main>
        </div>
    );
};

export default App;

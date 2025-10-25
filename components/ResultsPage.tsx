
import React, { useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { UserAnswers } from '../types';
import { ASSESSMENT_QUESTIONS } from '../constants';

interface ResultsPageProps {
    answers: UserAnswers;
    onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ answers, onRestart }) => {
    const { score, insights, leadTier } = useMemo(() => {
        let totalScore = 0;
        const scoringQuestions = ASSESSMENT_QUESTIONS.filter(q => q.type === 'scoring');
        const generatedInsights: string[] = [];

        scoringQuestions.forEach(q => {
            const answerValue = answers[q.id];
            if (typeof answerValue === 'number') {
                totalScore += answerValue;
                if(answerValue < 10 && q.options){
                     const selectedOption = q.options.find(opt => opt.value === answerValue);
                     if(selectedOption && selectedOption.suggestion && generatedInsights.length < 3) {
                         generatedInsights.push(selectedOption.suggestion);
                     }
                }
            }
        });
        
        // Ensure we always have 3 insights
        const fallbackInsights = [
            "Focus on creating a consistent content strategy to build authority.",
            "Implement a CRM to systematically track and nurture your leads.",
            "A/B test your landing page headlines to improve conversion rates."
        ];
        while(generatedInsights.length < 3 && fallbackInsights.length > 0) {
            generatedInsights.push(fallbackInsights.shift()!);
        }


        const solutionPreference = answers['q14'];
        let tier: 'high' | 'mid' | 'low' = 'mid';

        if (totalScore >= 70 && (solutionPreference === 3 || solutionPreference === 4)) {
            tier = 'high';
        } else if (totalScore < 40 || solutionPreference === 1) {
            tier = 'low';
        }

        return { score: totalScore, insights: generatedInsights, leadTier: tier };
    }, [answers]);

    const gaugeData = [
        { name: 'Score', value: score },
        { name: 'Remaining', value: 100 - score },
    ];
    const COLORS = ['#14b8a6', '#334155'];

    const getRecommendation = () => {
        switch (leadTier) {
            case 'high':
                return {
                    title: "You're Ready to Scale!",
                    description: "Your lead generation system is strong. Let's discuss a personalized strategy to accelerate your growth and dominate your market.",
                    cta: "Book a 1-on-1 Strategy Call",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                };
            case 'mid':
                return {
                    title: "Great Foundation, Let's Optimize.",
                    description: "You have the building blocks in place. Our upcoming group workshop will give you the tools to optimize your system for better results.",
                    cta: "Join Our Group Workshop",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                };
            case 'low':
                return {
                    title: "Let's Build Your Foundation.",
                    description: "The first step is understanding the fundamentals. Download our free guide to learn the core principles of building a lead generation machine.",
                    cta: "Download Free E-Book",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                };
        }
    };
    
    const recommendation = getRecommendation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Your Lead Generation Results</h1>
                <p className="text-lg text-slate-300 mb-12">Here's your personalized report and action plan.</p>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Score Gauge */}
                    <div className="md:col-span-2 bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Your Score</h2>
                        <div style={{ width: '100%', height: 250 }}>
                           <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={gaugeData}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={180}
                                        endAngle={0}
                                        innerRadius={60}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        {gaugeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="relative bottom-28 text-5xl font-bold text-teal-400">{score}
                                <span className="text-2xl text-slate-400">/100</span>
                            </div>
                        </div>
                    </div>
                    {/* Key Insights */}
                    <div className="md:col-span-3 bg-slate-800 p-6 rounded-lg shadow-lg text-left">
                         <h2 className="text-2xl font-bold text-white mb-4">Your Key Insights</h2>
                         <ul className="space-y-4">
                            {insights.map((insight, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-slate-300">{insight}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>

                 {/* Recommended Next Steps */}
                <div className="mt-8 bg-teal-500/10 border-2 border-teal-500/50 p-8 rounded-lg shadow-lg text-center">
                    <div className="flex justify-center items-center mb-4">
                        <div className="bg-teal-500 p-3 rounded-full mr-4">
                            {recommendation.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-white">{recommendation.title}</h2>
                    </div>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">{recommendation.description}</p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-xl py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                       {recommendation.cta}
                    </button>
                </div>
                
                 <div className="mt-12">
                    <button
                        onClick={onRestart}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        Take the assessment again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;

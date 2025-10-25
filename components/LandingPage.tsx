import React from 'react';

interface LandingPageProps {
    onStart: () => void;
}

// FIX: Replaced `JSX.Element` with `React.ReactElement` to resolve "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
            <div className="bg-teal-500 p-3 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400">{children}</p>
    </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-slate-900 to-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                    Struggling to Generate Qualified Leads?
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8">
                    Discover your lead generation score and get a personalized action plan to attract ready-to-buy clients.
                </p>

                <div className="my-12 grid md:grid-cols-3 gap-8 text-left">
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                        title="Benchmark Your System"
                    >
                        Measure your current lead generation process against industry best practices to identify your biggest strengths and weaknesses.
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        title="Identify Bottlenecks"
                    >
                        Pinpoint the exact areas in your funnel that are costing you leads and sales, from initial attraction to final conversion.
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                        title="Get an Action Plan"
                    >
                        Receive a dynamic, personalized report with actionable steps to improve your score and build a predictable client acquisition machine.
                    </FeatureCard>
                </div>
                
                <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:text-left mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">Created by Daniel Priestley</h2>
                        <p className="text-slate-400 mt-2">Based on a proven system for creating automated lead generation through online assessments that convert strangers into qualified, ready-to-buy clients.</p>
                    </div>
                     <img src="https://picsum.photos/id/1005/100/100" alt="Daniel Priestley" className="w-24 h-24 rounded-full border-4 border-slate-600 shadow-md ml-0 md:ml-6" />
                </div>

                <div className="mt-12">
                    <button
                        onClick={onStart}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        Take the 3-Minute Assessment
                    </button>
                    <p className="mt-4 text-sm text-slate-500">It's free & you'll get your results instantly.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
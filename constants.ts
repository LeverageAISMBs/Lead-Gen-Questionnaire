
import { Question } from './types';

export const ASSESSMENT_QUESTIONS: Question[] = [
    // Contact Info
    { id: 'name', type: 'contact', questionType: 'text', text: 'What is your full name?', required: true },
    { id: 'email', type: 'contact', questionType: 'email', text: 'What is your email address?', required: true },
    { id: 'phone', type: 'contact', questionType: 'tel', text: 'What is your phone number? (Optional)', required: false },

    // Scoring Questions (10)
    { 
        id: 'q1', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Do you have a clearly defined ideal customer profile?', 
        options: [
            { text: 'No, not at all.', value: 0, suggestion: 'Defining your ideal customer is the first step to effective marketing.' },
            { text: 'Somewhat, it could be clearer.', value: 5, suggestion: 'Refining your customer profile will sharpen your messaging.' },
            { text: 'Yes, it\'s very detailed.', value: 10, suggestion: 'Excellent! A clear customer profile is foundational.' },
        ]
    },
    { 
        id: 'q2', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'How consistently do you generate new leads each month?', 
        options: [
            { text: 'It\'s very unpredictable.', value: 0, suggestion: 'A systematic approach can bring predictability to your lead flow.' },
            { text: 'Somewhat consistent, but I want more.', value: 5, suggestion: 'You have a base to build on. Scaling is the next step.' },
            { text: 'Very consistent and predictable.', value: 10, suggestion: 'Fantastic! You have a strong lead generation engine.' },
        ]
    },
    { 
        id: 'q3', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Do you have an automated system for nurturing leads?', 
        options: [
            { text: 'No, I handle everything manually.', value: 0, suggestion: 'Automation can save you time and prevent leads from slipping through the cracks.' },
            { text: 'I have some basic automation.', value: 5, suggestion: 'Expanding your automation can significantly improve efficiency.' },
            { text: 'Yes, a fully automated nurturing sequence.', value: 10, suggestion: 'Top-tier! Your system is working for you 24/7.' },
        ]
    },
    { 
        id: 'q4', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Is your value proposition clearly communicated on your website?', 
        options: [
            { text: 'No, it\'s unclear.', value: 0, suggestion: 'A clear value proposition is crucial for capturing visitor attention immediately.' },
            { text: 'It\'s okay, but could be better.', value: 5, suggestion: 'A small tweak to your value proposition can dramatically increase conversions.' },
            { text: 'Yes, it\'s crystal clear and compelling.', value: 10, suggestion: 'Great! This is key to converting traffic into leads.' },
        ]
    },
    { 
        id: 'q5', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'How effectively are you using content to attract leads?', 
        options: [
            { text: 'I\'m not creating content.', value: 0, suggestion: 'Content is a powerful tool for attracting your ideal customers.' },
            { text: 'I create content sporadically.', value: 5, suggestion: 'Consistency is key in content marketing. A content calendar can help.' },
            { text: 'I have a consistent content strategy.', value: 10, suggestion: 'You are effectively building authority and attracting inbound leads.' },
        ]
    },
    { 
        id: 'q6', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Do you track metrics for your lead generation efforts?', 
        options: [
            { text: 'No, I don\'t track any metrics.', value: 0, suggestion: 'Tracking metrics is essential to understand what\'s working and what\'s not.' },
            { text: 'I track some basic metrics.', value: 5, suggestion: 'Deeper metric analysis can reveal key opportunities for optimization.' },
            { text: 'Yes, I have a detailed analytics dashboard.', value: 10, suggestion: 'Data-driven decisions will accelerate your growth.' },
        ]
    },
    { 
        id: 'q7', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'What percentage of your landing page visitors convert into leads?', 
        options: [
            { text: 'Less than 5%', value: 0, suggestion: 'Optimizing your landing page for conversions is a high-leverage activity.' },
            { text: 'Between 5% and 20%', value: 5, suggestion: 'You are on the right track. Continue testing to improve conversion rates.' },
            { text: 'More than 20%', value: 10, suggestion: 'Exceptional! Your landing pages are highly effective.' },
        ]
    },
    { 
        id: 'q8', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Do you have a follow-up process for unconverted leads?', 
        options: [
            { text: 'No, I don\'t have a process.', value: 0, suggestion: 'Most sales happen in the follow-up. Implementing a process is crucial.' },
            { text: 'I follow up sometimes.', value: 5, suggestion: 'Systematizing your follow-up will ensure no opportunity is missed.' },
            { text: 'Yes, I have a structured follow-up system.', value: 10, suggestion: 'This discipline significantly increases revenue from your leads.' },
        ]
    },
    { 
        id: 'q9', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Is your sales team (or you) equipped with qualification criteria?', 
        options: [
            { text: 'No, we treat all leads the same.', value: 0, suggestion: 'Qualifying leads helps you focus your energy on the best opportunities.' },
            { text: 'We have some informal criteria.', value: 5, suggestion: 'Formalizing your criteria ensures consistency and better forecasting.' },
            { text: 'Yes, we have a clear qualification framework (like BANT, MEDDIC).', value: 10, suggestion: 'This is a best practice for efficient and effective sales.' },
        ]
    },
    { 
        id: 'q10', 
        type: 'scoring', 
        questionType: 'radio', 
        text: 'Do you regularly ask for and incorporate customer feedback?', 
        options: [
            { text: 'No, we rarely do.', value: 0, suggestion: 'Customer feedback is a goldmine for improving your product and marketing.' },
            { text: 'We do it occasionally.', value: 5, suggestion: 'Making feedback a regular part of your process will keep you aligned with the market.' },
            { text: 'Yes, it\'s an integral part of our process.', value: 10, suggestion: 'You are building a customer-centric business, which is a huge competitive advantage.' },
        ]
    },

    // Qualification Questions (5)
    { 
        id: 'q11', 
        type: 'qualification', 
        questionType: 'radio', 
        text: 'What is your current situation regarding lead generation?', 
        options: [
            { text: 'Just starting out, no system in place.', value: 1 },
            { text: 'Have some pieces, but it\'s not a cohesive system.', value: 2 },
            { text: 'Have a system, but it\'s underperforming.', value: 3 },
            { text: 'Have a good system, looking to scale.', value: 4 },
        ]
    },
    { 
        id: 'q12', 
        type: 'qualification', 
        questionType: 'radio', 
        text: 'What is your primary goal in the next 90 days?', 
        options: [
            { text: 'Generate my first consistent leads.', value: 1 },
            { text: 'Double my current lead flow.', value: 2 },
            { text: 'Improve the quality of my leads.', value: 3 },
            { text: 'Automate my lead generation process.', value: 4 },
        ]
    },
    { 
        id: 'q13', 
        type: 'qualification', 
        questionType: 'radio', 
        text: 'What do you see as your biggest obstacle right now?', 
        options: [
            { text: 'Lack of a clear strategy.', value: 1 },
            { text: 'Not enough time to implement.', value: 2 },
            { text: 'Limited budget for marketing.', value: 3 },
            { text: 'Technical challenges.', value: 4 },
        ]
    },
    { 
        id: 'q14', 
        type: 'qualification', 
        questionType: 'radio', 
        text: 'What type of solution are you most interested in?', 
        options: [
            { text: 'DIY (Books, free guides)', value: 1 },
            { text: 'Group Program (Courses, workshops)', value: 2 },
            { text: 'Done-With-You (Coaching, consulting)', value: 3 },
            { text: 'Done-For-You (Agency services)', value: 4 },
        ]
    },
    { 
        id: 'q15', 
        type: 'qualification', 
        questionType: 'textarea', 
        text: 'Is there anything else you\'d like to share about your goals or challenges?' 
    },
];

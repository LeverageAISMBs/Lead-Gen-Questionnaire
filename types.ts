
export interface QuestionOption {
    text: string;
    value: number; // For scoring questions
    suggestion?: string; // For personalized insights
}

export interface Question {
    id: string;
    type: 'contact' | 'scoring' | 'qualification';
    questionType: 'text' | 'email' | 'tel' | 'radio' | 'textarea';
    text: string;
    options?: QuestionOption[];
    required?: boolean;
}

export interface UserAnswers {
    [questionId: string]: string | number;
}

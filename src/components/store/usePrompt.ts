import { createStore } from './store';

interface PromptHistory {
    name_prompt: string;
    model: string;
    messages: string[];
}

interface Prompt {
    model: string,
    time: string,
    role: string,
    value: string
}

const defaultStatePromptHistory: PromptHistory = {
    name_prompt: "Untitled",
    model: "",
    messages: [
        ""
    ]
};

const defaultStatePrompt: Prompt = {
    model: "",
    time: "",
    role: "",
    value: ""
};

export const [usePromptHistory] = createStore(defaultStatePromptHistory);
export const [usePrompt] = createStore(defaultStatePrompt);
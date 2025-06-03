import { create } from "zustand";
import axios from "axios";

export const useInterviewStore = create((set, get) => ({    
    sessionId: null,
    setSessionId: (id) => set({ sessionId: id }),

    answers: [],
    addAnswer: (qa) => 
        set((state) => ({ answers: [...state.answers, qa] })),

    clearInterview: () => 
        set({ sessionId: null, answers: [] }),

})); 
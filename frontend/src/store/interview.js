import { create } from "zustand";

export const useInterviewStore = create((set) => ({
    sessionId: null,
    setSessionId: (id) => set({ sessionId: id }),
    answers: [],
    addAnswer: (qa) => 
        set((state) => ({ answers: [...state.answers, qa] })),
    clearInterview: () => set({ sessionId: null, answers: [] }),
})); 
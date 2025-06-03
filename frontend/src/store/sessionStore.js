// store/session.js
import { create } from 'zustand';

export const useSessionsStore = create((set) => ({
  sessions: [],
  selectedSession: null,

  setSessions: (sessions) => set({ sessions }),
  setSelectedSession: (session) => set({ selectedSession: session }),
}));

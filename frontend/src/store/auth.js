import { create } from 'zustand';

function getUserFromStorage() {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
        console.error('Error parsing user from LocalStorage:', e);
        return null;
    }
}

export const useAuthStore = create((set) => ({
    token: localStorage.getItem('token') || null,
    user: getUserFromStorage(),
    sessionId: null,

    setToken: (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        set({ token, user });
    },

    setSessionId: (sessionId) => set({ sessionId }),

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ token: null, user: null });
    },
}));
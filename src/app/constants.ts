
console.log(import.meta.env.VITE_BASE_API_URL)
export const PATH = {
    USERS: '/api/users',
    SUBMIT_LOGIN: `${import.meta.env.VITE_BASE_API_URL}/api/login`,
} as const;

export const HTTP_DEFAULT_HEADERS: HeadersInit = {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_API_KEY,
};
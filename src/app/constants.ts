
console.log(import.meta.env.VITE_BASE_API_URL)
export const PATH = {
    GET_USERS: '/get_users',
    SUBMIT_LOGIN: `${import.meta.env.VITE_BASE_API_URL}/api/login`,
} as const;

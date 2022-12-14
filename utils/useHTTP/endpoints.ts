import { endpoint } from "./types"

export const loginWithText: endpoint = {
    url: '/auth/login',
    method: 'POST',
}

export const registerUser: endpoint = {
    url: '/auth/register',
    method: 'POST',
}
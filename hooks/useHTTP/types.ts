export interface endpoint {
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
}

export interface loginUserWithTextPayload {
    email: string,
    password: string
}

export interface registerUserPayload {
    email: string,
    password: string
    image: string
}
export interface TokenPayload {
    email: string;
    type: 'ACCESS' | 'REFRESH';
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
    accessExpiresIn: number;
    refreshExpiresIn: number;
}
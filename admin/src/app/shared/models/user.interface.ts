export type Roles = 'SUSCRIPTOR' | 'ÁDMIN'

export interface User {
    username: string | null | undefined;
    password: string | null | undefined;
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    role: Roles;

    firstName : string;
    lastName: string;
    email: string;
    username : string;
    category:number;
}

export interface userItem {
    message: string;
    token: string;
    userId: number;
    role: Roles;

    firstName : string;
    lastName: string;
    email: string;
    username : string;
    category:number;
}

export interface UserList {
    error: string;
    list: []
}
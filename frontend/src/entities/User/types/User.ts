export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

export interface User {
    id: string,
    role: Role,
    email: string,
    photo: string,
    last_name: string,
    first_name: string,
    middle_name: string,
}
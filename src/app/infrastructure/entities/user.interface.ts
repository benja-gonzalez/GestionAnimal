export interface UserLogin { 
    user: User;
    role: ERole;
}

export interface User {
    name: string;
    username: string;
    password: string;
}

export enum ERole {
// ADMIN > ENCARGADO > EMPLEADO
    ADMIN = "ADMIN",
    ENCARGADO = "ENCARGADO",
    EMPLEADO = "EMPLEADO",
}
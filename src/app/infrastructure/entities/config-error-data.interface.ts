export interface IConfigErrorData { 
    status: TStatusError;
    data: IMessageError;
}

export interface IMessageError {
    title: EErrorTitle;
    subtitle: string;
    message: string;
}

export type TStatusError = 200 | 400 | 404 | 401 | 500 | 501;

export enum EErrorTitle {
    AUTH_ERROR = "AUTH_ERROR",
    ERROR = "ERROR",
    DB_ERROR = "DB_ERROR",
    SRV_ERROR = "SRV_ERROR",
    NOT_FOUND_ERROR = "NOT_FOUND_ERROR",
    OK = "OK"
}
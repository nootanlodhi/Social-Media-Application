export interface IRegisterPayload {
    username: string;
    email: string;
    password: string;
    name: string;
    dob: string;
    gender: string;
    mobile: string;
    age: number | string
}

export type ValidationErrors = {
    username?: string;
    name?: string;
    email?: string;
    password?: string;
    age?: string;
    mobile?: string;
    gender?: string;
    dob?: string;
  };
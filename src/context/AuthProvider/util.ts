import { Api } from "../../services/api";
import { IUser } from "./types";

//Armazenar usuário no armazenamento local
export function setUserLocalStorage (user: IUser | null){
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem('u')

    if (!json) {
        return null
    }

    const user =JSON.parse(json)
        return user ?? null;

}

export async function CreateUser (name: string, email: string, password: string) {
    try {
        const request = await Api.post('create-user', {name, email, password});
        return request.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}


//Solicitação do login do usuário
export async function LoginRequest (email: string, password: string) {
    try {
        const request = await Api.post('login', {email, password});

        return request.data;
    } catch (error) {
        return null;
    }
}


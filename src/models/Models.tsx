export interface Product{
    id: number,
    name: string,
    brand: string,
    color: string,
    price: number
}

export interface Dictionary {
    dictionaryName: string;
    mutations: any
}

export interface Message{
    content:string;
    error?:boolean;
}

export class Message implements Message{
    constructor(newMessage:string, error?:boolean){
        this.content = newMessage;
        this.error = error;
    }
}
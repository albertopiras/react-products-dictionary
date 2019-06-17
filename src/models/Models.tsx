export interface Product {
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

export class Message {
    content: string;
    error?: boolean;
    constructor(newMessage: string, error?: boolean) {
        this.content = newMessage;
        this.error = error;
    }
}
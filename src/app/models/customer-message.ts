export class CustomerMessage {
    fullname: string;
    email: string;
    message: string;

    constructor(fullname: string, email: string, message: string){
        this.fullname = fullname;
        this.email = email;
        this.message = message;
    }
}

import { UserException } from "./userExcpection"

export class User {
    username: string
    password: string
    email!: string
    confirmPassword!: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    get getUsername(): string {
        return this.username
    }

    get getPassword(): string {
        return this.password
    }

    get getEmail(): string {
        return this.email
    }

    static fromJSON(json: any): User {
        try {
            if(json.username == null) {
                throw new UserException("Username is required")
            }

            if(json.password == null) {
                throw new UserException("Password is required")
            }

            var user =  new User(json.username, json.password)

            if (json.email != null) {
                user.email = json.email
            }

            return user
            
        }
        catch (error) {
            throw new UserException("Error while trying to convert JSON to User: " + error)
        }
    }
}
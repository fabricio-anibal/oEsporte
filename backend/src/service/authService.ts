import { User } from "../model/auth/user";
import { UserException } from "../model/auth/userExcpection";
import { Database } from "../repository/mongoDb/mongoDbConnection";
import { AuthRepository } from "../repository/mongoDbAuthRepository";
import bcrypt from 'bcrypt'
import { config } from "../../conf/config";
import jwt from 'jsonwebtoken'

export class AuthService {
    authRepository: AuthRepository

    constructor(database: Database) {
        this.authRepository = new AuthRepository(database);
    }

    async save(json: any): Promise<void> {
        var user = User.fromJSON(json)

        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(user.password, salt)

        user.password = hashedPassword

        const status = this.authRepository.save(user);

        if (!status) {
            throw new UserException('Failed to insert item in the database')
        }
    }

    async verifyUsernameExistence(username: string): Promise<Boolean> {
        const response = await this.authRepository.getByUsername(username)

        if (response) {
            return true
        }

        return false
    }

    async verifyEmailExistence(email: string): Promise<Boolean> {
        const response = await this.authRepository.getByEmail(email)

        if (response) {
            return true
        }

        return false
    }

    async validPassword(json: any): Promise<Boolean> {
        var user = User.fromJSON(json)

        const response = await this.authRepository.getByUsername(user.username)

        var password = response?.password!

        const validPassword = await bcrypt.compare(user.password, password)

        if (!validPassword) {
            return false
        }

        return true
    }

    async generateToken(json: any): Promise<string> {
        var user = User.fromJSON(json)
        const secret = config.auth.secret

        const token = jwt.sign({
                id: user.username!
            },
            secret
        )

        return token
    }

    async validToken(token: string): Promise<Boolean> {
        const secret = config.auth.secret

        try {
            jwt.verify(token, secret)

            return true
        }
        catch (error) {
            return false
        }
    }

}
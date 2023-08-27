import { config } from '../../conf/config'
import { User } from '../model/auth/user'
import {Database} from './mongoDb/mongoDbConnection'
import { MongoDbException } from './mongoDb/mongoDbException'

export class AuthRepository {
    protected db: Database

    constructor(db: Database) {
        this.db = db
    }

    async save(user: User): Promise<Boolean> {
        try{
            const response = await this.getItemCollection().insertOne(user)

            if (response.acknowledged) {
                return true
            }
            throw new MongoDbException('Invalid result while inserting an element')
        }
        catch(error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    async getByUsername(username: string): Promise<User | null> {
        try {
            const response = await this.getItemCollection().findOne({username: username})

            return response
        }
        catch(error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    async getByEmail(email: string): Promise<User | null> {
        try {
            const response = await this.getItemCollection().findOne({email: email})

            return response
        }
        catch(error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    protected getItemCollection() {
        return this.db.getDb()
            .collection<User>(config.db.collections.userItems)
    }
}
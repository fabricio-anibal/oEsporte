import { Local } from "../model/local/local";
import { Database } from "../repository/mongoDb/mongoDbConnection";
import { MongoDbException } from "../repository/mongoDb/mongoDbException";
import { LocalRepository } from "../repository/mongoDbLocalRepository";

export class LocalService{
    repository: LocalRepository

    constructor(database: Database) {
        this.repository = new LocalRepository(database)
    }

    async add(json: any): Promise<void> {
        const status = await this.repository.save(Local.fromJSON(json))

        if (!status) {
            throw new MongoDbException('Failed to insert item in the database')
        }
    }

    async list(): Promise<Local[]> {
        return await this.repository.list()
    }
}
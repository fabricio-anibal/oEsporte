import { Local } from "../model/local";
import { Database } from "../repository/mongoDbConnection";
import { MongoDbException } from "../repository/mongoDbException";
import { LocalRepository } from "../repository/mongoDbRepository";

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
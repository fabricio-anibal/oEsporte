import { config } from '../../conf/config'
import { Local } from '../model/local/local'
import {Database} from './mongoDb/mongoDbConnection'
import { MongoDbException } from './mongoDb/mongoDbException'

export class LocalRepository {
    protected db: Database

    constructor(db: Database) {
        this.db = db
    }

    async save(local: Local): Promise<Number> {
        try{
            local.id = await this.newId()

            const response = await this.getItemCollection().insertOne(local)

            if (response.acknowledged) {
                return local.id
            }
            throw new MongoDbException('Invalid result while inserting an element')
        }
        catch(error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    async list(): Promise<Local[]> {
        try {
            return (await this.getItemCollection().find<Local>({}).toArray())
                .map((it) => Local.fromJSON(it))
        } catch (error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    protected getItemCollection() {
        return this.db.getDb()
            .collection<Local>(config.db.collections.localItems)
    }

    private async newId(): Promise<number> {
        try {
            let lastId = await this.getSequenceCollection()
                .findOne<LocalId>({name: config.db.sequences.localItemId})

            if (!lastId) {
                lastId = {
                    name: config.db.sequences.localItemId,
                    value: 1,
                }
            } else {
                lastId.value++
            }

            const result = await this.getSequenceCollection().replaceOne(
                {name: config.db.sequences.localItemId},
                lastId,
                {upsert: true},
            )

            if (result.acknowledged) {
                return lastId.value
            }

            throw new MongoDbException('Invalid value during id generation')
        } catch (error: any) {
            console.log(error)
            throw new MongoDbException(error.message)
        }
    }

    protected getSequenceCollection() {
        return this.db.getDb()
            .collection<LocalId>(config.db.collections.sequences)
    }
}

export interface LocalId {
    name: string,
    value: number
}
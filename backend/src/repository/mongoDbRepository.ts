import { config } from '../../conf/config'
import { Local } from '../model/local'
import {Database} from './mongoDbConnection'

export class LocalRepository {
    protected db: Database

    constructor(db: Database) {
        this.db = db
    }

    async save(local: Local): Promise<Number> {
        try{
            const response = await this.getItemCollection().insertOne(local)

            if (response.acknowledged) {
                return local.id
            }
            throw new Error('Invalid result while inserting an element')
        }
        catch(error) {
            console.log(error)
            throw error
        }
    }

    async list(): Promise<Local[]> {
        try {
            return (await this.getItemCollection().find<Local>({}).toArray())
                .map((it) => Local.fromJSON(it))
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    protected getItemCollection() {
        return this.db.getDb()
            .collection<Local>(config.db.collections.localItems)
    }
}
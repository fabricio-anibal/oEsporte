import e from 'express'
import cors from 'cors'
import {Database} from './repository/mongoDbConnection'
import {LocalService} from './service/localService'

const app = e()

const api = e.Router()

const database = new Database()
const service = new LocalService(database)

app.use(cors())

app.use('/api', api)

api.get('/teste', async (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

api.post('/', e.json(), async (req, res) => {
    await service.add(req.body)
    res.status(200).json({
        items: await service.list(),
    })
})

api.get('/', async (req, res) => {
    await service.add(req.body)
    res.status(200).json({
        status: 'ok'
    })
})

const port = process.env.PORT || 3000

app.use(function(err: Error, req: e.Request, res: e.Response) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use(function(req, res) {
    res.status(404).json({
        status: 'failure',
        message: 'Unknown operation',
    })
});

async function exitHandler() {
    console.log(`Server exiting...`)
    await database.disconnect()
    console.log('Server exited')
    process.exit()
}

app.listen(port, () => {
    database.connect().then(() => {
        console.log(`ToDo! server Listening on port ${port}`)
    })
})

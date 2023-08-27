import e from 'express'
import cors from 'cors'
import {Database} from './repository/mongoDb/mongoDbConnection'
import {LocalService} from './service/localService'
import {AuthService} from './service/authService'
import { config } from '../conf/config'
import bodyParser from 'body-parser'

const app = e()

const api = e.Router()

const database = new Database()
const localService = new LocalService(database)
const authService = new AuthService(database)

app.use(bodyParser.urlencoded({extended:true, parameterLimit: 100000, limit: '500mb'}))
app.use(bodyParser.json({limit: '500mb'}))

app.use(cors())

app.use('/api', api)

api.post('/local', validToken, e.json(), async (req, res) => {
    //console.log(req.body)
    await localService.add(req.body)
    res.status(201).json({
        status: 'ok'
    })
})

api.get('/local', async (req, res) => {
    let locais = await localService.list()
    res.status(200).json({
        status: 'ok',
        items: locais,
    })
})

api.post('/auth/register', e.json(), async (req, res) => {

    if(await authService.verifyUsernameExistence(req.body.username)) {
        res.status(400).json({
            status: 'failure',
            message: 'Username already exists',
        })
        return
    }

    if(!req.body.email){
        res.status(400).json({
            status: 'failure',
            message: 'Email is required',
        })
        return
    }

    if(req.body.password != req.body.confirmPassword){
        res.status(400).json({
            status: 'failure',
            message: 'Password and Confirm Password must be the same',
        })
        return
    }

    if(await authService.verifyEmailExistence(req.body.email)) {
        res.status(400).json({
            status: 'failure',
            message: 'Email already exists',
        })
        return
    }

    await authService.save(req.body)
    res.status(201).json({
        status: 'ok'
    })
})

api.post('/auth/login', e.json(), async (req, res) => {

    if(!await authService.verifyUsernameExistence(req.body.username)) {
        res.status(404).json({
            status: 'failure',
            message: 'Username does not exist',
        })
        return
    }

    if(!await authService.validPassword(req.body)) {
        res.status(400).json({
            status: 'failure',
            message: 'Invalid password',
        })
        return
    }

    res.status(200).json({
        status: 'ok',
        token: await authService.generateToken(req.body)
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
        console.log()
    })
})

async function validToken(req: any, res: any, next: any) {
    const tokenHeader = req.headers['authorization']
    const token = tokenHeader && tokenHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({
            status: 'failure',
            message: 'Access denied. No token provided.',
        })
        return
    }

    try {
        if(await authService.validToken(token)){
            next()
        }
        else {
            res.status(400).json({
                status: 'failure',
                message: 'Invalid token.',
            })
        }
    }
    catch (ex) {
        res.status(400).json({
            status: 'failure',
            message: 'Invalid token.',
        })
    }

}


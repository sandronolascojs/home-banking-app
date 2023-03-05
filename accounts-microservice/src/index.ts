import 'dotenv/config'
import 'reflect-metadata'
import { FastifyServer } from './server'

FastifyServer.bootstrap(Number(process.env.PORT))
  .catch(console.error)

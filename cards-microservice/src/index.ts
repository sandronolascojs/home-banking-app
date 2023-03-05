import { HttpServer } from './server'

HttpServer.boostrap(3000)
  .catch(console.error)

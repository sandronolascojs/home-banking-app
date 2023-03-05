import fastify, { type FastifyInstance } from 'fastify'

interface IHttpServer {
  port: number
}

abstract class HttpServer<T> implements IHttpServer {
  protected app: T
  port: number

  protected constructor (port: number, app: T) {
    this.port = port
    this.app = app
  }
}

export class FastifyServer extends HttpServer<FastifyInstance> {
  private constructor (port: number, app: FastifyInstance) {
    super(port, app)
  }

  async start (): Promise<void> {
    await this.app.listen({ port: this.port })
  }

  static async bootstrap (port: number): Promise<void> {
    await new FastifyServer(port, fastify()).start().then(() => {
      console.log(`Server running on PORT: ${port}`)
    })
  }
}

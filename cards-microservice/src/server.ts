import fastify, { type FastifyInstance } from 'fastify'

abstract class IHttpServer<T> {
  protected readonly _port: number
  protected readonly app: T

  protected constructor (_port: number, app: T) {
    this.app = app
    this._port = _port
  }

  public abstract start (): Promise<void>

  get application (): T {
    return this.app
  }

  get port (): number {
    return this._port
  }
}

export class HttpServer extends IHttpServer<FastifyInstance> {
  private constructor (_port: number) {
    super(_port, fastify())
  }

  public async start (): Promise<void> {
    this.app.listen({ port: this._port }, (err, address) => {
      if (err !== null) {
        console.error(err)
        this.app.log.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address as string}`)
    })
  }

  public static async boostrap (port: number): Promise<void> {
    await new HttpServer(port).start()
  }
}

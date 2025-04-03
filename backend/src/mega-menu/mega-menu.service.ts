import { Injectable } from '@nestjs/common'
import { MongoClient, Db } from 'mongodb'
import NodeCache from 'node-cache'
import dotenv from 'dotenv'
dotenv.config()

@Injectable()
export class MegaMenuService {
  private client: MongoClient
  private db: Db
  private cache: NodeCache

  constructor() {
    this.client = new MongoClient(this.getEnvVar('DATABASE_URL'))
    this.cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 })
  }

  getEnvVar(key: string): string {
    if (process.env[key]) {
      return process.env[key]
    } else {
      throw new Error(`Env ${key} is not defined`)
    }
  }

  async onModuleInit() {
    try {
      await this.client.connect()
      this.db = this.client.db('Zoommer')

      await this.loadCache()
    } catch (err) {
      throw new Error('MongoDB connection failed', err as Error)
    }
  }

  private async loadCache() {
    const megaMenu = await this.db
      .collection('MegaMenu')
      .find({}, { projection: { _id: 0 } })
      .toArray()
    this.cache.set('megaMenu', megaMenu)
  }

  public async getMegaMenu() {
    const megaMenu = this.cache.get('megaMenu')

    if (!megaMenu) {
      await this.loadCache()
      return this.cache.get('megaMenu')
    }

    return megaMenu
  }
}

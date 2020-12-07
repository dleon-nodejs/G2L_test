import Redis from "ioredis"

class Cache {

    private redis: Redis.Redis
    private minutes: number = 5

    constructor(){
        this.redis = new Redis(6379)
    }

    check(){
        console.log(this.redis.status)
    }

    async get(key: string){
        try{
            const data = await this.redis.get(key)
            return data ? JSON.parse(data) : null
        }catch(e){
            console.log(e.message)
            return null
        }
    }

    async set(key: string, value: string){
        try{
            return await this.redis.set(key, JSON.stringify(value), "EX", 60 * this.minutes)
        }catch(e){
            console.log(e.message)
            return false
        }
    }

    async del(key: string){
        try{
            return await this.redis.del(key)
        }catch(e){
            console.log(e.message)
            return false
        }
    }
 
}

export default new Cache()
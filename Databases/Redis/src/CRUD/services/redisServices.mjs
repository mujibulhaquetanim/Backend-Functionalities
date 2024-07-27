export class redisService {
    constructor(client) {
        this.client = client
    }

    //ping redis server
    async pingRedisServer() {
        try {
            return await this.client.ping()
        } catch (error) {
            throw new Error(`failed to ping redis server ${error}`)
        }
    }

    //get redis server info
    async getRedisServerInfo() {
        try {
            return await this.client.info()
        } catch (error) {
            throw new Error(`failed to get redis server info ${error}`)
        }
    }

    //get redis server config
    async getRedisServerConfig() {
        try {
            return await this.client.configGet()
        } catch (error) {
            throw new Error(`failed to get redis server config ${error}`)
        }
    }

    //set redis server config
    async setRedisServerConfig() {
        try {
            return await this.client.configSet()
        } catch (error) {
            throw new Error(`failed to set redis server config ${error}`)
        }
    }

    //CRUD operations:
    //set key value
    async setKeyValue(key, value, expireTime) {
        try {
            await this.client.set(key, value);
            if (expireTime) {
                await this.client.expire(key, expireTime)
            }
        } catch (error) {
            throw new Error(`failed to set key ${key} with value ${value} and error ${error}`)
        }
    }

    //get key value
    async getKeyValue(key) {
        try {
            return await this.client.get(key)
        } catch (error) {
            throw new Error(`failed to get key ${key} with error ${error}`)
        }
    }

    //delete key value
    async deleteKeyValue(key) {
        try {
            await this.client.del(key)
        } catch (error) {
            throw new Error(`failed to delete key ${key} with error ${error}`)
        }
    }

    //update key value
    async updateKeyValue(key, value, expireTime) {
        try {
            //updateKeyValue using setKeyValue method
            await this.setKeyValue(key, value, expireTime);
        } catch (error) {
            throw new Error(`failed to update key ${key} with error ${error}`)
        }
    }

    //expire key value
    async expireKeyValue(key, expireTime) {
        try {
            await this.client.expire(key, expireTime)
        } catch (error) {
            throw new Error(`failed to expire key ${key} with error ${error}`)
        }
    }
}

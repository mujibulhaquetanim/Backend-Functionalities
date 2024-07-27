export class redisService {
    constructor(client) {
        this.client = client
    }

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

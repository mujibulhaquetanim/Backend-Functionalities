import { RedisService } from "../services/redisServices.mjs"

export class CrudController {

    constructor(redisService) {
        this.redisService = redisService
    }

    //ping redis server
    async pingRedisServer(req, res) {
        try {
            const ping = await this.redisService.pingRedisServer();
            res.status(200).json({ ping })
        } catch (error) {
            res.status(500).send(`Error while pinging redis server: ${error.message}`)
        }
    }

    //get redis server info
    async getRedisServerInfo(req, res) {
        try {
            const info = await this.redisService.getRedisServerInfo();
            res.status(200).json({ info })
        } catch (error) {
            res.status(500).send(`Error while getting redis server info: ${error.message}`)
        }
    }

    //get redis server config
    async getRedisServerConfig(req, res) {
        try {
            const config = await this.redisService.getRedisServerConfig();
            res.status(200).json({ config })
        } catch (error) {
            res.status(500).send(`Error while getting redis server config: ${error.message}`)
        }
    }

    //CRUD operations:
    //set key value
    async setKeyValue(req, res) {
        const { key, value, expireTime } = req.body
        try {
            await this.redisService.setKeyValue(key, value, expireTime ? parseInt(expireTime) : null);
            res.status(200).json({ msg: "key value is set successfully" })

        } catch (error) {
            res.status(500).send(`Error while setting key ${key} value: ${error.message}`)
        }
    }

    //get key value
    async getKeyValue(req, res) {
        const { key } = req.params
        try {
            const value = await this.redisService.getKeyValue(key);
            res.status(200).json({ value })
        } catch (error) {
            res.status(500).send(`Error while getting key ${key} value: ${error.message}`)
        }
    }

    //delete key value
    async deleteKeyValue(req, res) {
        const { key } = req.params
        try {
            await this.redisService.deleteKeyValue(key);
            res.status(200).json({ msg: "key value is deleted successfully" })
        } catch (error) {
            res.status(500).send(`Error while deleting key ${key} value: ${error.message}`)
        }
    }

    //update key value
    async updateKeyValue(req, res) {
        const { key, value, expireTime } = req.body
        try {
            await this.redisService.updateKeyValue(key, value, expireTime ? parseInt(expireTime) : null);
            res.status(200).json({ msg: "key value is updated successfully" })
        } catch (error) {
            res.status(500).send(`Error while updating key ${key} value: ${error.message}`)
        }
    }

    //expire key value
    async expireKeyValue(req, res) {
        const { key, expireTime } = req.body
        try {
            await this.redisService.expireKeyValue(key, expireTime ? parseInt(expireTime) : null);
            res.status(200).json({ msg: "key value is expired successfully" })
        } catch (error) {
            res.status(500).send(`Error while expiring key ${key} value: ${error.message}`)
        }
    }

    //set multiple key value
    async setMultipleKeyValue(req, res) {
        const keyValueObject = req.body
        try {
            await this.redisService.setMultipleKeyValue(keyValueObject);
            res.status(200).json({ msg: "key value is set successfully" })
        } catch (error) {
            res.status(500).send(`Error while setting multiple key value: ${error.message}`)
        }
    }

    //get multiple key value
    async getMultipleKeyValue(req, res) {
        try {
            const keyValueObject = await this.redisService.getMultipleKeyValue();
            res.status(200).json({ keyValueObject })
        } catch (error) {
            res.status(500).send(`Error while getting multiple key value: ${error.message}`)
        }
    }

    //delete multiple key value
    async deleteMultipleKeyValue(req, res) {
        const keyArray = req.body
        try {
            await this.redisService.deleteMultipleKeyValue(keyArray);
            res.status(200).json({ msg: "key value is deleted successfully" })
        } catch (error) {
            res.status(500).send(`Error while deleting multiple key value: ${error.message}`)
        }
    }

    //delete all keys
    async deleteAllKeys(req, res) {
        try {
            await this.redisService.deleteAllKeys();
            res.status(200).json({ msg: "all keys are deleted successfully" })
        } catch (error) {
            res.status(500).send(`Error while deleting all keys: ${error.message}`)
        }
    }

    //get all keys
    async getAllKeys(req, res) {
        try {
            const keys = await this.redisService.getAllKeys();
            res.status(200).json({ keys })
        } catch (error) {
            res.status(500).send(`Error while getting all keys: ${error.message}`)
        }
    }

    //get all values
    async getAllValues(req, res) {
        try {
            const values = await this.redisService.getAllValues();
            res.status(200).json({ values })
        } catch (error) {
            res.status(500).send(`Error while getting all values: ${error.message}`)
        }
    }

    //get all keys and values
    async getAllKeysAndValues(req, res) {
        try {
            const keyValueObject = await this.redisService.getAllKeysAndValues();
            res.status(200).json({ keyValueObject })
        } catch (error) {
            res.status(500).send(`Error while getting all keys and values: ${error.message}`)
        }
    }
}
import { RedisService } from "../services/redisServices.mjs"

export class CrudController {

    constructor(redisService) {
        this.redisService = redisService
    }

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
}
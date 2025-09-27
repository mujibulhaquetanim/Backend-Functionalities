import {google} from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import fs from 'fs/promises'

try {
    const cred = await fs.readFile('./cred.json', 'utf-8')
    
    // jsong -> js object
    const cred_parsed = JSON.parse(cred)
    // console.log(cred_parsed)
    
    const auth = new GoogleAuth({
        credentials: cred_parsed,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    
    const sheets = google.sheets({version: 'v4', auth})
    
    console.log('starting to update...')

    const  setValues = await sheets.spreadsheets.values.update({
        spreadsheetId: '1CcwyDqhpCZ8OOjF7fT3i9NhvlIPjgdwXgINmPUOeMFk',
        range: 'Sheet1!A1',
        valueInputOption: 'raw',
        requestBody: {
            values: [
                ['Hello', 'World']
            ]
        }
    })

    console.log('successfully updated')
    console.log(setValues.data)
    
    console.log('getting values...')
    const getValues = await sheets.spreadsheets.values.get({
        spreadsheetId: '1CcwyDqhpCZ8OOjF7fT3i9NhvlIPjgdwXgINmPUOeMFk',
        range: 'Sheet1'
    })
    
    console.log(getValues.data.values)
} catch (error) {
    console.error(error)
}
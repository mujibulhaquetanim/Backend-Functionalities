const client = require('./client');

async function init() {
    try {
        await client.set('msg:2', 'hello');
        const result = await client.get('msg:2');
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        await client.quit();
    }
}

init();

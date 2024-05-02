const client = require('client')

async function init() {
    await client.set('msg:1', 'hello from the other side');
    const result = client.get('msg:1');
    console.log(result);
}

init();
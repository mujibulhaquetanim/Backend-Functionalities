const express = require('express');

const app = express();

app.get('/', () => {
    res.send('A big Thanks for being here in Notification default route');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));

app.use(express.json());

app.post('/api/start', (req, res) => {
    let {user} = req.body;

    console.log(`${getIdentifier()}-${user} has started self-destruction process `);

    res.json({
        msg: 'The self-destruction process has started'
    })
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function getIdentifier() {
    
    const names = ['MACHINE','REMOTE','HOST','CLIENT','USER','ORIGIN'];

    return names[Math.floor(Math.random() * names.length)];

}




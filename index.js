const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('hello from node my    second node 2.0')
})


const users = [
    { id: 0, name: "rashed", gmail: "rasgsw2ghh" },
    { id: 1, name: "lamia", gmail: "rasgsw2ghh" },
    { id: 2, name: "zarif", gmail: "rasgsw2ghh" },
    { id: 3, name: "zarif", gmail: "rasgsw2ghh" },
    { id: 4, name: "zarif", gmail: "rasgsw2ghh" }
]

//post 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('post hitted', req.body)
    res.send(JSON.stringify(newUser))
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchresult)
    }
    else {

        res.send(users)
    }
})
//dynamic api
app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'apple', 'pineapple', 'berry'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('ymmy yummy tok mangoes')
})

app.listen(port, () => {
    console.log('listning from ', port)
})
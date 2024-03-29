const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json()) //express json parser to convert data from json to object
app.use(cors({origin: true}))

app.post("/authenticate", async(req,res)=>{
    const {username} = req.body;

    try{
        const r = await axios.put('https://api.chatengine.io/users/',
        {
            username: username, secret: username, first_name: username
        },
        {headers: {"private-key": "31ee94fd-a670-4bad-bee5-2c3bf9414503"}})
        return res.status(r.status).json(r.data)
    }catch(e){
        return res.status(e.response.status).json(e.response.data)
    }
})

app.listen(3000, ()=>{
    console.log('server is ready!')
})
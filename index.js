const express = require('express');
const app = express();

const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`Server is listening on port ${PORT}`);
    
});

app.get("/", (req,res)=>{
    res.send("<h1>Hello I'm Awais</h1>");
});

app.get('user',(req,res)=>{
    const user =[
        {
            id: 1,
            name:"user 1"
        },

        {
            id:2,
            name:"user 2",
        },
    ];
    res.json(user);
});
const express = require('express');
const app = express();
const { ROLE, users } = require('./data');
const { authUser, authRole } = require('./authentication') 
const pageRouter = require('./routes/pages');

app.use(express.json());
app.use(setUser);
app.use('/pages', pageRouter);

app.get('/', (req,res) => {
    res.send('Home page');
});

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req,res) => {
    res.send("Admin's Page");
});

app.get('/dashboard', authUser, (req,res) => {
    res.send("DASHBOARD");
});

function setUser(req, res, next){
    const userId = req.body.userId;
    if(userId){
        req.user = users.find(user => user.id === userId);
    }
    next();
}

app.listen(3000);

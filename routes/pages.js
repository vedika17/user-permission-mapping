const express = require('express');
const router = express.Router();
const { pages }= require('../data');
const { authUser } = require('../authentication');
const { canViewPage, canDeletePage, scopedPages } = require('../permissions/page')

router.get('/', authUser,(req,res) => {
    res.json(scopedPages(req.user,pages));
});

router.get('/:pageId', setPage, authUser, authGetPage, (req,res) => {
    res.json(req.page)
});

router.delete('/:pageId', setPage, authUser, authDeletePage, (req,res)=>{
    res.send("Deleted project");
});

function setPage(req, res, next){
    const pageId = parseInt(req.params.pageId);
    req.page = pages.find(page => page.id === pageId);

    if(req.page == null){
        res.status(404);
        return res.send("Page not found");
    }
    next();
}

function authGetPage (req, res, next){
    if(!canViewPage(req.user, req.page)){
        res.status(401);
        res.send('Not allowed');
    }
    next();
}

function authDeletePage(req, res, next){
    if(!canDeletePage(req.user, req.page)){
        res.status(401);
        res.send('Not allowed');
    }
    next();
}

module.exports = router;
const express = require('express')
const router = express.Router();
const { addPage, main } = require('../views')
const { Page } = require("../models");

router.get('/', (req, res, next) => {
    res.send(main())
}
)

router.get('/add', (req, res, next) => {
    res.send(addPage())
}
)

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body)
        // const title = req.body.title;
        // const content = req.body.content;

        // console.log('title=' + title + 'content=' + content)
        // const page = await Page.create({
        //     title: 'hello',
        //     content: 'hello'
        // })
        res.send('hi')
    } catch (e) {
        console.log(e)
        res.send('error')
    }
})

module.exports = router;
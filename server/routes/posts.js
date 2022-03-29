const express = require('express');
const { Post, User } = require('../db/models');
const router = express.Router();
const { asyncHandler, mobValidator, authorize } = require('../utils');


// GET All Posts
router.get('/all', asyncHandler( async (req, res) => {
    const posts = await Post.findAll({
        include: [ { model: User }]
    });   
    res.json({ posts });
}));


// GET All Posts for a user
router.get('/:userId', asyncHandler( async (req, res) => {
    const posts = await Post.findAll({
        where: { author: req.params.id }, 
        include: [{ model: User }],
    });   
    res.json({ posts });
}));







// GET New Mob Form Route
router.get('/new', csrfProtection, asyncHandler( async (req, res) => {
    const biomes = await Biome.findAll()
    const mob = {};
    const errors =[];
    res.render('mobform', { csrfToken: req.csrfToken(), biomes, mob, errors });
}));


// POST Create New Mob Route
router.post('/new', csrfProtection, mobValidator, asyncHandler( async (req, res) => {
    const { name, about, image, hitPoints, biomeId, damage } = req.body
    if (req.errors.length < 1) {
        const setHostile = true ? req.body.hostile === "true" : false;
        const newMob = await Mob.create({
            name,
            about,
            image,
            hitPoints,
            biomeId,
            damage,
            hostile: setHostile
        });
    console.log(newMob);
    res.redirect('/mobs');
    } else {
        console.log('ERROR')
        const biomes = await Biome.findAll()
        res.render('mobform', {csrfToken: req.csrfToken(), biomes, mob: req.body, errors: req.errors})
    }
}));



module.exports = router;
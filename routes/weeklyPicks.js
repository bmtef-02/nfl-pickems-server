const express = require('express');
const WeeklyPick = require('../models/weeklyPick');
const weeklyPicksRouter = express.Router();
const cors = require('./cors');

weeklyPicksRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.corsWithOptions, (req, res, next) => {
    WeeklyPick.find()
    .then(weeklyPicks => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applcation/json');
        res.json(weeklyPicks);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res) => {
    WeeklyPick.create(req.body)
    .then(weeklyPicks => {
        console.log(`WeeklyPick Created: ${weeklyPicks}`);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applcation/json');
        res.json(weeklyPicks);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /weeklyPicks');
})
.delete(cors.corsWithOptions, (req, res, next) => {
    WeeklyPick.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
})

module.exports = weeklyPicksRouter;
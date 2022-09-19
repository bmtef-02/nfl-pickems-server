const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weeklyPickSchema = new Schema({
    week: {
        type: Number,
        required: true
    },
    picks: [[]]
}, {
    timestamps: true
});

const WeeklyPick = mongoose.model('WeeklyPick', weeklyPickSchema);

module.exports = WeeklyPick;
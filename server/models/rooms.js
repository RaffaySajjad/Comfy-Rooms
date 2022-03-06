const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name : {
        type: 'String',
        required: true,
    },
    capacity : {
        type: 'number',
        required: true,
    },
    contact : {
        type: 'number',
        required: false,
    },
    type : {
        type: 'String',
        required: true,
    },
    imageURLs : [],
    currentBookings : [],
    description : {
        type: 'String',
        required: false,
    },
    rentPerDay : {
        type: 'number',
        required: true,
    }
},{
    timestamps: true,
});

const roomModel = mongoose.model('rooms', roomSchema);
module.exports = roomModel;
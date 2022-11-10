const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const cropSchema =  new mongoose.Schema({
    Propertyid: {
        type: ObjectId,
        ref: "property"
    },
    Cropname: {
        type: String,
        trim: true
      },
    Cropcyclestage: {
        type: String,
        trim: true
    },
},{timestamps: true})

const cropModel = mongoose.model('crop', cropSchema)


module.exports = {cropModel}



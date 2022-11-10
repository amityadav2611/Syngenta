const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const propertySchema =  new mongoose.Schema({
    Region: {
        type: String,
        trim : true
    },
    Field: {
        type: String,
        trim: true
      },
    OrganizationId: {
        type: ObjectId,
        ref: "organization"
    },
    CropId: {
        type: ObjectId,
        ref: "crop"
    }
    
},{timestamps: true})

const propertyModel = mongoose.model('property', propertySchema)


module.exports = {propertyModel}



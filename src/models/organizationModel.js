const mongoose = require('mongoose')


const organizationSchema =  new mongoose.Schema({
    Name: {
        type: String,
        require: true,
        trim : true
    },
    Mobile: {
        type: Number,
        required: true,
        unique: true,
        trim: true
      },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true
      }, 
    Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
      }
},{timestamps: true})

const organizationModel = mongoose.model('organization', organizationSchema)


module.exports = {organizationModel}



const {propertyModel} = require("../models/propertyModel");


const createProp = async (req, res) =>{
    try{
        let data = req.body;

        if(!data) return res.status(400).send({status: false, message: "Enter the property details"})

        let propertyData = await propertyModel.create(data)
        
        res.status(201).send({status: true, message: "Created Successfully",data: propertyData})
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}


const getProperty = async(req, res) => {
    try{

       //here we find all the organization details
       const propertyList = await propertyModel.find().populate("CropId")
       res.status(200).send({status: true, message: "Found", data: propertyList})

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

module.exports = {createProp, getProperty}
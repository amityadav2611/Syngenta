const {cropModel} = require("../models/cropModel");
const {propertyModel} = require("../models/propertyModel");


const createCrop = async (req, res) =>{
    try{
        let data = req.body;

        const {Propertyid} = data


        if(!data) return res.status(400).send({status: false, message: "Enter the crop details"})

        let checkProperty = await propertyModel.findById(Propertyid);
        if(!checkProperty) return res.status(400).send({status: false, message: "Property does not exist"}) 

        let cropData = await cropModel.create(data)

        await propertyModel.findByIdAndUpdate({_id: data.Propertyid}, {$set: {CropId: cropData._id}})
        //if(!updateProp) return res.status(400).send({status: false, message: "Property does not exist"})
        
        res.status(201).send({status: true, message: "Created Successfully",data: cropData})
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

const getCrop = async(req, res) => {
    try{

       //here we find all the organization details
       const cropList = await cropModel.find()
       res.status(200).send({status: true, message: "Found", data: cropList})

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

module.exports = {createCrop, getCrop}
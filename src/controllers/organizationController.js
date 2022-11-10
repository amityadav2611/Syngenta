const {organizationModel} = require('../models/organizationModel')

const validator = require("../validator/validation")

const jwt = require('jsonwebtoken')

const loginOrg = async (req, res) => {
    try{
        let data = req.body;
        const {Mobile, Password} = data

        //check data is present or not
        if(Object.keys(data).length == 0) return res.status(401).send({status: false, message: "Email and Password is required for login"})

        //check email or password is present in body or not
        if(!Mobile) return res.status(401).send({status: false, message: "Email field is empty"})
        if(!Password) return res.status(401).send({status: false, message: "Password field is empty"})


        //check email and password is corrrect or not
        let getOrgData = await organizationModel.findOne({Mobile: data.Mobile, Password: data.Password})
        if(!getOrgData) return res.status(400).send({status: false, message: "Email or password is invalid"})


        if(getOrgData){
            
        //generate token
        let token = jwt.sign({ organizationId: getOrgData._id }, "syngetaapp", {expiresIn: '24h'});

        //set the headers
        res.status(200).setHeader("x-api-key", token);

        res.status(200).send({status: true, message: "Logged in successfully", Token: token})
        }else{
            res.status(400).send({status: false, message: "Organization does not signin please signIn first"})
        }
        
    }catch(err){
        res.status(501).send({status: false, Error: err.message})
    }
}

const createOrg = async (req, res) =>{
    try{
        let data = req.body;

        const { Name,Mobile,Email,Password,} = data;

        //Validation starts
        if (!validator.isValidRequestBody(data)) { //to check the empty request body
            return res.status(400).send({ status: false, message: "Please Enter the Organization Details" })
        }
        if (!validator.isValid(Name)) {
            return res.status(400).send({ status: false, message: "Name is required." })
        }
        if (!validator.isValid(Mobile)) {
            return res.status(400).send({ status: false, message: "Mobile number is required" })
        }
        if (!validator.isValid(Email)) {
            return res.status(400).send({ status: false, message: "Email  is required" })
        }
        if (!validator.isValid(Password)) {
            return res.status(400).send({ status: false, message: "Password is required" })
        }

        if (!validator.validMobileNum(Mobile)) {
            return res.status(400).send({ status: false, message: "Enter a 10-digit Indian phone number exluding (+91)" })
        }

        if (!validator.validEmail(Email)) {
            return res.status(400).send({ status: false, message: "Enter a valid email-id" })
        }

        if (!validator.validPwd(Password)) {
            return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters" })
        }
        
        //validation end.

         //Search the Mobile number and Email for uniqeness
         const uniqueMobEmail = await organizationModel.findOne({ Mobile: Mobile, Email: Email })
         if (uniqueMobEmail) {
             return res.status(400).send({ status: false, message: "Mobile Number or Email id is already used" })
         }

         //save organization details to DB
        let organizationData = await organizationModel.create(data)
        
        res.status(201).send({status: true, message: "Created Successfully",data: organizationData})
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

const getOrg = async(req, res) => {
    try{

       //here we find all the organization details
       const organizationList = await organizationModel.find()
       res.status(200).send({status: true, message: "Found", data: organizationList})

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}


module.exports = {loginOrg, createOrg, getOrg}
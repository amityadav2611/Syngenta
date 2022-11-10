const mongoose = require('mongoose')

// Validation checking function

const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false //it checks whether the value is null or undefined.
    if (typeof value === 'string' && value.trim().length === 0) return false //it checks whether the string contain only space or not 
    return true;
};
const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0; // it checks, is there any key is available or not in request body
};

//it checks whether the string contain only space or not 
const validString = (String) => {
    if (/\d/.test(String)) { 
      return true
    }else {
      return false;
    };
  };

const validMobileNum = (Mobile) => {
    if (/^[6-9]\d{9}$/.test(Mobile)) {
      return true
    }else {
      return false;
    };
  };

  const validEmail = (Email) => {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email)){
      return true
    }else {
      return false;
    }
      
  };
  
  const validPwd = (Password) => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)){
      return true
    }else {
      return false;
    }
  };

module.exports = {
    isValid,
    isValidRequestBody,
    validString,
    validMobileNum,
    validEmail,
    validPwd
}
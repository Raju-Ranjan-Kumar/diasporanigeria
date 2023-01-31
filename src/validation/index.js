import validator from "validator";

const validateregister = (data) => {
    let errors = {};
    const { firstName, lastName, email, phone, password, conPassword } = data

    if(validator.isEmpty(firstName)) {
        errors.firstName = "*First name is required"
    }
    if((firstName.length > 0) && (firstName.length < 3)) {
        errors.firstName = "*First name must be minimum 3 characters"
    }

    if(validator.isEmpty(lastName)) {
        errors.lastName = "*Last name is required"
    }
    if((lastName.length > 0) && (lastName.length < 3)) {
        errors.lastName = "*Last name must be minimum 3 characters"
    }

    if(validator.isEmpty(email)) {
        errors.email = "*Email is required"
    }else if(!validator.isEmail(email)){
        errors.email = "*Please enter a valid email"
    }
    
    if(validator.isEmpty(phone)) {
        errors.phone = "*Phone number is required"
    }

    if(validator.isEmpty(password)) {
        errors.password = "*Please provide a password"
    }
    if((password.length > 0) && (password.length < 8)){
        errors.password = "*Password must be minimum 8 characters"
    }
    if(password.length > 18){
        errors.password = "*Password must be maximum 18 characters"
    }

    if(validator.isEmpty(conPassword)) {
        errors.conPassword = "*Please provide a confirm password"
    }else if(!validator.equals(password, conPassword)){
        errors.conPassword = "*Password and confirm password does not match"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateregister;
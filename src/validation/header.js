import validator from "validator";

const validateheader = (data) => {
    let errors = {};

    const { phone, password } = data

    if(validator.isEmpty(phone)) {
        errors.phone = "*Phone number is required"
    }

    if(validator.isEmpty(password)) {
        errors.password = "*Please provide a password"
    }
    if((password.length > 0) && (password.length < 8)){
        errors.password = "*Password must be minimum 8 characters"
    }
    if(password.length > 16){
        errors.password = "*Password must be maximum 16 characters"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateheader;
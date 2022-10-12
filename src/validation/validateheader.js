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
        errors.password = "*Password should not less than 8 characters"
    }
    if(password.length > 15){
        errors.password = "*Password should not grater than 15 characters"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateheader;
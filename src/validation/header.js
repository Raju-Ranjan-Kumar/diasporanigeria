import validator from "validator";

const validateheader = (data) => {
    let errors = {};

    const { email, password } = data

    if(validator.isEmpty(email)) {
        errors.email = "*Please enter a email"
    }else if(!validator.isEmail(email)){
        errors.email = "*Please enter a valid email"
    }

    if(validator.isEmpty(password)) {
        errors.password = "*Please enter a password"
    }
    if((password.length > 0) && (password.length < 8)){
        errors.password = "*Password must be minimum 8 characters"
    }
    if(password.length > 18){
        errors.password = "*Password must be maximum 18 characters"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateheader;
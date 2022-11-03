import validator from "validator";

const validatindex = (data) => {
    let errors = {};

    const { username, password } = data

    if(validator.isEmpty(username)) {
        errors.username = "*User name is required"
    }
    if((username.length > 0) && (username.length < 3)) {
        errors.username = "*User name must be minimum 3 characters"
    }

    if(validator.isEmpty(password)) {
        errors.password = "*Password is required"
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

export default validatindex;
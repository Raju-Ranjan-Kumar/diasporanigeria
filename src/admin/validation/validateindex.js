import validator from "validator";

const validatindex = (data) => {
    let errors = {};

    const { username, password } = data

    if(validator.isEmpty(username)) {
        errors.username = "*User name is required"
    }
    if(validator.isEmpty(password)) {
        errors.password = "*Password is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validatindex;
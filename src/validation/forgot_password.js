import validator from "validator";

const valFrgtPassword = (data) => {
    let errors = {};
    const { email } = data

    if(validator.isEmpty(email)) {
        errors.email = "*Email is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default valFrgtPassword;
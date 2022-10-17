import validator from "validator";

const valFrgtPassword = (data) => {
    let errors = {};
    const { phone } = data

    if(validator.isEmpty(phone)) {
        errors.phone = "*Phone number is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default valFrgtPassword;